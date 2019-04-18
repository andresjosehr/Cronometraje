<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Usuarios;
use Validator;
use Auth;

class LoginController extends Controller
{
    public function index()
    {
    	if (session()->get('sesion')) {
    		return redirect("panel-de-control");
    	} else{
    		return view("login.login");
    	}
    }
    public function validar(Request $Request)
    {

    	// Validar integridad de datos
		$rules = array(
		    'email'    => 'required|email', 
		    'password' => 'required|min:3' 
		);
		$validator = Validator::make(array('email' => $Request->Email, 'password' => $Request->Pass), $rules);

		if ($validator->fails()) {
		    ?><script>
		    	swal("Error", "Datos Invalidos", "warning");
		    	login_MostrarBoton();
		    </script><?php
		} else {

			$Usuario = Usuarios::where('email', $Request->Email)->first();

			if ($Usuario && Hash::check($Request->Pass, $Usuario->password)) {

				session()->put('sesion', 'true');
				session()->put('id', $Usuario->id);
				session()->put('nombre', $Usuario->nombre);
				session()->put('email', $Usuario->email);
				session()->put('dni', $Usuario->dni);
				session()->put('direccion', $Usuario->direccion);
				session()->put('ciudad', $Usuario->ciudad);
				session()->put('estado', $Usuario->estado);
				session()->put('rol', $Usuario->rol);
				session()->put('usuario_padre', $Usuario->usuario_padre);
				session()->put('codigo_postal', $Usuario->codigo_postal);
				?><script>window.location.href = "panel-de-control";</script><?php
			} else{
				?><script>
		    	swal("Error", "Datos Invalidos", "warning");
		    	login_MostrarBoton();
		    </script><?php
			} 
		}
    }
    public function cerrarSesion(){
    	session()->forget('sesion');
     	return redirect("panel-de-control");
    }
}
