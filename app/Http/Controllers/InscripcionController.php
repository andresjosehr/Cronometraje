<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Formularios;
use App\Participantes;
use App\DatosParticipante;
use Redirect;

class InscripcionController extends Controller
{
    public function showForm($codigo){
    	$Formulario=Formularios::whereHas('eventos', function ($query) {
                    $query->where('id_usuario', session()->get("id"));
                })->with("campos.subcampos")->with("eventos.categorias")->where("codigo", $codigo)->get();

    	return view("inscripcion.inscripcion", ["Formulario" => $Formulario]);
    }

    public function storeData(Request $Request)
    {
      if ($Request->nombre_participante) {
        $v = \Validator::make($Request->only("nombre_participante", "apellido", "email_participante", "dni", "nacimiento", "sexo", "id_estado_inscripcion"), [
              'nombre_participante'   => 'required',
              'apellido'              => 'required',
              'email_participante'    => 'required|unique:participantes',
              'dni'                   => 'required|unique:participantes',
              'nacimiento'            => 'required|date|date_format:Y-m-d',
              'sexo'                  => 'required|numeric',
              'id_estado_inscripcion' => 'required|numeric',
          ]); 
         if ($v->fails()){
              return Redirect::back()->withErrors($v)->withInput();
              die();
         } 
            $DatEx=$Request->except('_token', "nombre_participante", "apellido", "email_participante", "dni", "nacimiento", "sexo", "id_estado_inscripcion", "edad", "id_categoria");
         		Participantes::insert($Request->only("nombre_participante", "apellido", "email_participante", "dni", "nacimiento", "sexo", "edad", "id_estado_inscripcion", "id_categoria"));
           	$Part = Participantes::where("email_participante", $Request->email_participante)->select("id")->first();
      } else{
          $v = \Validator::make($Request->only("email_participante"), [
              'email_participante'    => 'required|exists:participantes',
          ]);

          if ($v->fails()){
              return Redirect::back()->withErrors($v)->withInput();
              die();
         }

         $DatEx = $Request->except('_token', "email_participante", "id_categoria");
         $Part =  Participantes::where("email_participante", $Request->email_participante)->select("id")->first();
      }

        if (DatosParticipante::where("id_participante", $Part->id)->first()) {
          return redirect()->back()->with('error_participante_existente', 'El usuario registrado al email que ingresaste ya ha llenado este formulario anteriormente')->withInput();
          die();
        } else{
            foreach ($DatEx as $key => $part) {
              if (explode("_", $key)[0]=="file") {

                  $file = $Request->file($key);
                  $nombre = str_random(30).".".$file->getClientOriginalExtension();
                  $Request->file($key)->move(public_path("/img/crono/"), $nombre);

                  DatosParticipante::insert([
                    "id_campo" => explode("-", $key)[count(explode("-", $key))-1],
                    "id_participante" => $Part->id,
                    "valor" => $nombre
                  ]);

              } else {

                DatosParticipante::insert([
                    "id_campo" => explode("_", $key)[count(explode("_", $key))-1],
                    "id_participante" => $Part->id,
                    "valor" => $part
                  ]);

              }
            }
        }
            return redirect()->back()->with('mensaje', 'Listo! Tus datos han sido almacenados exitosamente, muchas gracias por tu registro');












     }

      public function showDatosParticipantes(Request $Request){
        
        $Part = Participantes::where("email_participante", $Request->email_participante)->first();
        return DatosParticipante::where("id_participante", $Part->id)->with("campos.formularios")->get();
      }
}
