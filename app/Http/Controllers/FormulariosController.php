<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Formularios;
use App\Campos;
use App\SubCampos;
use App\Eventos;

class FormulariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {



        $Formularios = Formularios::whereHas('eventos', function ($query) {
                    $query->where('id_usuario', session()->get("id"));
                })->with("campos.subcampos")->get();
        
        $Eventos = Eventos::select("eventos.id", "eventos.nombre_evento")->join("usuarios",  "eventos.id_usuario", "usuarios.id")->where("usuarios.id", session()->get("id"))->get();

        return view("formularios.formularios", ["Eventos" => $Eventos, "Formularios" => $Formularios]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }


    public function createPost(Request $Request)
    {

       $ImgForm=null;
       if ($Request->file('file')) {
         $file = $Request->file('file');
         $nombre = str_random(30).".".$file->getClientOriginalExtension();
         $Request->file('file')->move(public_path("/img/crono/"), $nombre);
         $ImgForm=$nombre;
       }


       $Datos = json_decode($Request->Datos, true);

       Formularios::insert([
        "nombre_formulario" => $Datos["nombre_formulario"],
        "img" => $ImgForm,
        "codigo" => str_random(30),
        "id_evento" => $Datos["evento_asociado"]
       ]);

       $id_form = Formularios::select("id")->orderBy('id', 'desc')->first();

       unset($Datos["nombre_formulario"]);
       unset($Datos["nombre_formulario"]);
       unset($Datos["evento_asociado"]);


       foreach ($Datos as $key => $value) {

            if ($value["tipo"]=="text" || $value["tipo"]=="email" || $value["tipo"]=="date") {
              Campos::insert([
                "nombre" => $value["nombre"],
                "tipo" => $value["tipo"],
                "descripcion" => $value["descripcion"],
                "obligatorio" => $value["Obligatorio"],
                "id_formulario" => $id_form->id
               ]);
            }

            if ($value["tipo"]=="select" || $value["tipo"]=="multiselect") {

              Campos::insert([
                "nombre" => $value["nombre"],
                "tipo" => $value["tipo"],
                "descripcion" => $value["descripcion"],
                "obligatorio" => $value["Obligatorio"],
                "id_formulario" => $id_form->id
               ]);

              $id_campo = Campos::select("id")->orderBy('id', 'desc')->first();

              foreach ($value["Opciones"] as $key2 => $value2) {
                  SubCampos::insert([
                    "descripcion" => $value2,
                    "id_campo" => $id_campo->id
                  ]);
              }
        
            }

            if ($value["tipo"]=="file") {
              Campos::insert([
                "nombre" => $value["nombre"],
                "tipo" => $value["tipo"],
                "descripcion" => $value["descripcion"],
                "obligatorio" => $value["Obligatorio"],
                "img" => $value["img"],
                "pdf" => $value["pdf"],
                "id_formulario" => $id_form->id
               ]);
            }

            if ($value["tipo"]=="pago" ) {
              Campos::insert([
                "tipo" => $value["tipo"],
                "codigo_pago" => $value["codigo"],
                "id_formulario" => $id_form->id
               ]);
            }
       }

       return "Exito";


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $Request, $id)
    {
        if ($Request->tipo=="text" || $Request->tipo=="email" || $Request->tipo=="date" || $Request->tipo=="file" || $Request->tipo=="pago") {
            Campos::where("id", $Request->id)->update($Request->all());
            return Campos::where("id", $Request->id)->first();
        }

        if ($Request->tipo=="select" || $Request->tipo=="multiselect") {

            Campos::where("id", $Request->id)->update($Request->except("subcampos"));
            SubCampos::where("id_campo", $Request->id)->delete();

            for ($i=0; $i <count($Request->subcampos)+999 ; $i++) {
                    if (isset($Request->subcampos[$i])) {
                        SubCampos::insert([
                        "descripcion" => $Request->subcampos[$i],
                        "id_campo" => $Request->id
                   ]);
                }
            }

            return Campos::where("id", $Request->id)->with("subcampos")->first();
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $Request, $id)
    {
        if ($Request->nombre_formulario) {
            Formularios::where("id", $id)->delete();
            return "Exito";
        }else{
            SubCampos::where("id_campo", $id)->delete();
            Campos::where("id", $id)->delete();
            return "Exito";        
        }
    }
}
