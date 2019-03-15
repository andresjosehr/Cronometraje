<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RolesDeUsuario;
use App\Usuarios;
use App\CambiarEmail;
use App\ResetearContrasena;
use Hash;
use Route;
use View;

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

            self::emailUsuario($Request->email, $codigo, "resetear_pass");
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
        if ($tipo=="resetear_pass") {
            $body=(string)View::make('emails.resetear_contrasena', ["codigo" => $codigo]);
           mail($destinatario, "Cronometraje - Reseteo de contraseña", $body, $header) or die("No Enviado");
        }
        if ($tipo=="cambiar_email") {
            $body=(string)View::make('emails.cambiar_email', ["codigo" => $codigo]);
            mail($destinatario, "Cronometraje - Cambio de email", $body, $header) or die("No Enviado");
        }
    }
}
