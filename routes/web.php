<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::group([], function() {
	Route::get('login', array('uses' => 'LoginController@index')); 
	Route::get('resetear-contrasena/', function (){
	 	return view("login.resetear_contrasena");
	 });
});

Route::group([], function() {
	Route::post('login', array('uses' => 'LoginController@validar'));
	Route::post('resetear-contrasena', "UsuariosController@resetearContrasena");
	Route::post('resetear-contrasena/{codigo}', "UsuariosController@resetearContrasenaFinal");
});
Route::group(['middleware' => ['VerificarSesion']], function () {
    Route::get('panel-de-control', function(){
    	return view("panel-de-control");
	});
		
		Route::group([], function() {
		    Route::get('perfil', "UsuariosController@index");
		    Route::get('confirmar-email/{codigo}', "UsuariosController@confirmarEmail");
		});

		Route::group([], function() {
		    Route::post('editar_perfil', "UsuariosController@editarPerfil");
		    Route::post('editar_contrasena', "UsuariosController@editarContrasena");
		});
});

Route::get('CerrarSesion', "LoginController@cerrarSesion");

