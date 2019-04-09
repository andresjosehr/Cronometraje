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
Route::get('/',function()
{
	return redirect("login");
});
Route::group([], function() {
	Route::get('login', array('uses' => 'LoginController@index')); 
	Route::get('resetear-contrasena/', function (){
	 	return view("login.resetear_contrasena");
	 });
	Route::get('resetear-contrasena/{codigo}', "UsuariosController@resetearContrasenaFinal");
	Route::get('prueba',function(){
		return view("emails.resetear_contrasena");
	});
	Route::get('registrar-admin/{codigo}', "UsuariosController@registrarAdmin_paso3");
});
Route::group([], function() {
	Route::post('login', array('uses' => 'LoginController@validar'));
	Route::post('resetear-contrasena', "UsuariosController@resetearContrasena");
	Route::post('resetear-contrasena/{codigo}', "UsuariosController@resetearContrasenaFinalRegistro");
	Route::post('registrar-admin/{codigo}', "UsuariosController@registrarAdmin_paso4");
});



Route::group(['middleware' => ['VerificarSesion']], function () {
    Route::get('panel-de-control', function(){
    	return view("panel-de-control");
	});
		
		Route::group([], function() {
		    Route::get('perfil', "UsuariosController@index");
		    Route::get('confirmar-email/{codigo}', "UsuariosController@confirmarEmail");
		    Route::get('registrar-admin', "UsuariosController@registrarAdmin");
		});
		Route::group([], function() {
		    Route::post('editar_perfil', "UsuariosController@editarPerfil");
		    Route::post('editar_contrasena', "UsuariosController@editarContrasena");
		    Route::post('registrar-admin', "UsuariosController@registrarAdmin_paso2");
		});
});


Route::get('CerrarSesion', "LoginController@cerrarSesion");

Route::get('inscripcion/{codigo_form}', "inscripcionController@showForm");
Route::post('inscripcion/{codigo_form}', "inscripcionController@storeData");
Route::post('inscripcion', "inscripcionController@showDatosParticipantes");

Route::post('participantes/createPost', 'ParticipantesController@createPost');
Route::resource('participantes', 'ParticipantesController');

Route::post('formularios/createPost', "FormulariosController@createPost");
Route::post('formularios/uploadImgAyuda', "FormulariosController@uploadImgAyuda");
Route::resource('formularios', 'FormulariosController');