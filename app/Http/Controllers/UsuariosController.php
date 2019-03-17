<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RolesDeUsuario;
use App\Usuarios;
use App\CambiarEmail;
use App\ResetearContrasena;
use App\RegistroAdminTemp;
use Hash;
use Route;
use View;
use Illuminate\Support\Facades\Input;

class UsuariosController extends Controller
{
    public function index(){
    	return view("usuario",["Rol" => RolesDeUsuario::where("id", session()->get('rol'))->first()]);
    }

    public function editarPerfil(Request $Request){

    	$Email=session()->get("email");
    	$Usuarios = new Usuarios;

    	if (session()->get("email")==$Request->email) {
    		$v = \Validator::make($Request->except('email'), [
	            'nombre' => 'required',
	            'email'    => 'email|unique:usuarios',
        	]);
    	}

    	if (session()->get("email")!=$Request->email) {
    		$v = \Validator::make($Request->all(), [
	            'nombre' => 'required',
	            'email'    => 'email|unique:usuarios',
        	]);
    	}

 
        if ($v->fails())
        {
        	if ($v->errors("email")) {
        		?><script>
					$("#email").addClass("is-invalid");
					$("#email").after('<small id="us_error" style="color:red;">El email que ingresaste ya esta siendo usado por otro usuario</small>');
        		</script><?php
        	}
        }else{
        	Usuarios::whereId(session()->get("id"))->update($Request->except('email'));
        	session()->put('nombre', $Request->nombre);
        	?><script>
        		$(".nom_per").html("<?php echo $Request->nombre ?>");
        		$(".d-md-inline-block").html("<?php echo $Request->nombre ?>");
        		swal("Listo!", "Hemos actualizado tu información exitosamente", "success");
        	</script><?php
        	if (session()->get("email")!=$Request->email) {
					

							if(CambiarEmail::where('email_viejo', session()->get("email"))->update(['email_nuevo' => $Request->email])==0){
                                try {
                                    $codigo= self::GenerarCodigo();
                                    CambiarEmail::insert([
                                      'email_viejo' => session()->get("email"),
                                      'email_nuevo' => $Request->email,
                                      'codigo' => $codigo,
                                    ]);
                                } catch (\Exception $e) {   
                                   $Da = CambiarEmail::where('email_viejo', session()->get("email"))->first();
                                   $codigo=$Da->codigo;
                                }

                                self::emailUsuario($Request->email, $codigo, "cambiar_email");
							        ?><script>
					        			swal("Listo!", "Hemos actualizado tus datos correctamente", "success")
											.then((value) => {
											  swal("Una cosa mas", "Hemos mandado un correo electronico al nuevo email que ingresaste para completar el cambio de email", "warning");
											});
									</script><?php
							}

        	}
        }
        ?><script>
        	$( ".perfil_loading" ).fadeOut(250, function () {
		    	$( ".edit_us_btn" ).fadeIn(250);
		    });
        </script><?php
    }
    
    function editarContrasena(Request $Request){
    	Usuarios::where('id', session()->get("id"))
				 ->update([
				   'password' => Hash::make($Request->password),
				 ]);
	?><script>
		swal("Listo!", "Tu nueva contraseña ha sido registrada exitosamente", "success");
		document.getElementById('pass1').value="";
		document.getElementById('pass2').value="";
		$( ".contra_loading" ).fadeOut(250, function () {
			$( ".contra_btn" ).fadeIn(250);
		});

	</script><?php
    }

    function confirmarEmail(){

    	$Usuario=CambiarEmail::where("codigo", Route::input('codigo'))->first();
    	if ($Usuario) {
            CambiarEmail::where("codigo", Route::input('codigo'))->delete();
    		Usuarios::where("email", $Usuario->email_viejo)->update(["email" => $Usuario->email_nuevo]);
            if (session()->get('sesion')=="true") {
                session()->forget('sesion');
                echo "<script src='https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js'></script>";
                ?><script>
                window.onload=function(){
                    swal("Listo!", "Email actualizado exitosamente", "success")
                    .then(()=>{
                        window.location.href = "../panel-de-control";
                    });
                }
            </script><?php
            }
    	} else{
    		return redirect("panel-de-control");
    	}
    }

    public function resetearContrasena(Request $Request){


        $Datos = usuarios::select('usuarios.id', 'resetear_password.codigo')->leftJoin('resetear_password', 'usuarios.id', '=', 'resetear_password.id_usuario')
                     ->where($Request->all())->getQuery()->get();
        $Datos = json_decode(json_encode($Datos), true);
        if (!isset($Datos[0])) {
            ?><script>
                swal("Error!", "Este email no coincide con nuestros registros", "warning");
            </script><?php
        } else {
            if (isset($Datos[0]["codigo"])) {
                $codigo=$Datos[0]["codigo"];
            } else{
                $codigo = self::GenerarCodigo();
                ResetearContrasena::insert([
                  'codigo' => $codigo,
                  'id_usuario' => $Datos[0]["id"],
                ]);
            }

            self::emailUsuario($Request->email, $codigo, "resetear_contrasena");
            ?><script>
                swal("Listo!", "Hemos enviado un correo electronico para el cambio de contraseña", "success");
            </script><?php
        }

        ?><script>
            $( ".login_loading" ).fadeOut(250, function () {
                $( ".login100-form-btn" ).fadeIn(250);
            });
        </script><?php


        
    }

    public function resetearContrasenaFinal(Request $Request, $codigo)
    {
        $v = \Validator::make(["codigo" => $codigo], [
                'codigo' => 'exists:resetear_password'
            ]);
                if ($v->fails()){
                    return redirect("panel-de-control");
                } else{
                    return view("login.resetear_contrasena_final", ["info" => ResetearContrasena::where("codigo", $codigo)->first()]);
                }
    }
    public function resetearContrasenaFinalRegistro(Request $Request){
        
        Usuarios::where("id", $Request->id)->update(["password" => Hash::make($Request->password)]);
        ResetearContrasena::where("id_usuario", $Request->id)->delete();

        ?><script>
            $( ".login_loading" ).fadeOut(250, function () {
                $( ".login100-form-btn" ).fadeIn(250);
            });
            swal("Listo!", "Tu contraseña ha sido cambiada exitosamente", "success")
            .then(()=>{
                window.location="login";
            });
        </script><?php
    }

    public function GenerarCodigo(){
        $caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $caracteres .= "abcdefghijklmnopqrstuvwxyz";
        $caracteres .= "1234567890";
        $codigo='';
        $carac_desordenada = str_shuffle($caracteres);
        for($i=0;$i<=20;$i++) {
            $codigo .= $carac_desordenada[$i]; 
        }
        return $codigo;
    }

    public function emailUsuario($destinatario, $codigo, $tipo){


        $header = "From: Cronometraje <no-responder@cronometraje.com> \r\n";
        $header .= "Bcc: cronometraje@gmail.com \r\n";
        $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
        $header .= "Mime-Version: 1.0 \r\n";
        $header .= "Content-Type: text/html";

        $body=(string)View::make('emails.'.$tipo, ["codigo" => $codigo]);
        mail($destinatario, "Cronometraje - Reseteo de contraseña", $body, $header) or die("No Enviado");
    }

    public function registrarAdmin(){
        return view("registrar-admin", ["Roles" => RolesDeUsuario::where("id", ">=", session()->get('rol'))->get(), "AdminTemps" => RegistroAdminTemp::where("id_usuario_padre", session()->get("id"))->get()]);
    }

    public function registrarAdmin_paso2(Request $Request){

        $v = \Validator::make($Request->all(), [
            'email' => 'email|unique:usuarios,email|unique:cambiar_email,email_nuevo|unique:registro_admin_temp,email',
            'rol'    => 'gt: '.((int)session()->get('rol')-1)
        ]);


        if ($v->fails()) {
            foreach (json_decode(json_encode($v->errors()), true) as $campo => $error) {
                ?><script>
                    $('[name="<?php echo $campo; ?>"]').addClass("is-invalid");
                    $('[name="<?php echo $campo; ?>"]').after('<small id="invalid-feedback" style="color:red;"><?php echo $error[0] ?></small>');
                </script><?php
            }

        } else{
            $Request->merge(['codigo' => self::GenerarCodigo(), 'id_usuario_padre' => session()->get("id")]);

            RegistroAdminTemp::insert($Request->all());

             self::emailUsuario($Request->email, $Request->codigo, "registrar_admin");
            ?><script>
                var rol=$('#rol option[value="<?php echo $Request->rol ?>"]').text();
                $("#pre_admin_show").append('<tr><td><?php echo $Request->email ?></td><td>'+rol+'</td><td><button type="button" class="mb-2 btn btn-sm btn-primary mr-1">Enviar email de nuevo</button><button type="button" class="mb-2 btn btn-sm btn-secondary mr-1">Editar</button><button type="button" class="mb-2 btn btn-sm btn-danger mr-1">Eliminar</button></td></tr>')
                swal("Listo", "Hemos enviado un correo electronico para el registro del administrador seleccionado", "success");
            </script><?php
        }
        ?><script>
            $( ".loading_admin" ).fadeOut(250, function () {
                    $( ".reg_admin_btn" ).fadeIn(250);
                });
        </script><?php
    }

    public function registrarAdmin_paso3(Request $Request, $codigo){
        if (session()->get('sesion')=="true") {
            session()->forget('sesion');
        }
        $Reg=RegistroAdminTemp::where(["codigo" => $codigo])->get();
        if ($Reg!="[]") {
            return view::make("login.registro_admin")->with('data', $Reg);   
        } else{
            return redirect("/");
        }
    }

    public function registrarAdmin_paso4(Request $Request)
    {   
        $Request->merge(['password' => Hash::make($Request->password)]);
        $v = \Validator::make($Request->all(), [
            'email' => 'email|unique:usuarios,email',
            'nombre' => 'required'
        ]);

        if ($v->fails()) {
            ?><script>alert("Error, contacte al administrador del sistema")</script><?php
        } else{
            Usuarios::insert($Request->all());
            RegistroAdminTemp::where($Request->only("email"))->delete();
        }
        ?><script>
            swal("Listo!", "Tu registro ha sido exitoso", "success")
            .then(()=>{
                window.location="../";
            });
        </script><?php


    }

    public function EnviarPreAdmin()
    {
        ?><script>alert()</script><?php
    }
}
