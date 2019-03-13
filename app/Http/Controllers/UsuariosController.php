<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RolesDeUsuario;
use App\Usuarios;
use App\CambiarEmail;
use App\ResetearContrasena;
use Hash;
use Route;

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
                                    CambiarEmail::insert([
                                      'email_viejo' => session()->get("email"),
                                      'email_nuevo' => $Request->email,
                                      'codigo' => self::GenerarCodigo(),
                                    ]);
                                } catch (\Exception $e) {   
                                }
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
    		Usuarios::where("email", $Usuario->email_viejo)->update(["email" => $Usuario->email_nuevo]);
    		CambiarEmail::where("codigo", Route::input('codigo'))->delete();
    		session()->put('email', $Usuario->email_nuevo);
    		?><script>
    			alert("Email actualizado exitosamente");
    			window.location.href = "../../panel-de-control";
    		</script><?php
    	} else{
    		return redirect("panel-de-control");
    	}
    }

    public function resetearContrasena(Request $Request){


       $Datos = ResetearContrasena::join('usuarios', 'resetear_password.id_usuario', '=', 'usuarios.id')
                     ->where($Request->all())->getQuery() ->get();
        if ($Datos!="[]") {
            // self::emailUsuario($Request->email, "Cambio de contraseña", "Para cambiar su contraseña haga <a href='".request()->getHttpHost()."/".$Datos->codigo."'>click aqui </a> ");
        } else{
             $codigo = self::GenerarCodigo();
                $Datos = Usuarios::where('email', $Request->email)->first();
                ResetearContrasena::insert([
                    'id_usuario' =>  $Datos->id,
                    'codigo' => $codigo,
                ]);
            // self::emailUsuario($Request->email, "Cambio de contraseña", "Para cambiar su contraseña haga <a href='".request()->getHttpHost()."/".$codigo."'>click aqui </a> ");
        }

        ?><script>
            swal("Listo!", "Hemos enviado un correo electronico para el cambio de contraseña", "success");
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

    public function emailUsuario($destinatario, $asunto, $mensaje){

        mail($destinatario, $asunto, $mensaje);
    }
}
