<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Eventos;
use App\Formularios;
use App\Categorias;
use App\Usuarios;

class EventosController extends Controller
{

    public function Rol() {
       if (session()->get("rol")==1) { $ConsultaRol=Usuarios::select("id")->get()->toArray();  } if(session()->get("rol")==2) { $ConsultaRol[0]=session()->get("id"); }   if(session()->get("rol")==3) { $ConsultaRol[0]=session()->get("usuario_padre"); }  
       return $ConsultaRol;
   }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        $Eventos = Eventos::whereIn("id_usuario", self::Rol())->with("categorias")->get();

        $Categorias = Categorias::whereIn("id_usuario", self::Rol())->get();

        return view("eventos.eventos", ["Eventos" => $Eventos, "Categorias" => $Categorias]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function eventos_act()
    {
        $Eventos = Eventos::where("id_usuario", session()->get("id"))->with("categorias")->get();
        $Categorias = Categorias::select("categorias.id", "categorias.nombre_categoria")
                                    ->join("eventos", "categorias.id", "=", "eventos.id_categoria")
                                    ->join("usuarios", "eventos.id_usuario", "=", "usuarios.id")
                                    ->where("usuarios.id", session()->get("id"))->get();

        return view("eventos.lista", ["Eventos" => $Eventos, "Categorias" => $Categorias]);
    }
    public function create()
    {
        //
    }

public function createPost(Request $Request)
{

    $Request->merge(["id_usuario" => session()->get("id")]);

    $v = \Validator::make($Request->all(), [
            'nombre_evento'          => 'required',
            'fecha'                  => 'required',
            'email_evento'           => 'required|unique:eventos',
            'tipo'                   => 'required|numeric',
            'localidad'              => 'required',
            'estado_pago'            => 'required',
            'precio'                 => 'required|numeric',
            'inscripcion_habilitada' => 'required|numeric',
            'auto_email'             => 'required|numeric',
            'auto_numeracion'        => 'required|numeric',
        ]);

        if ($v->fails()){
            return $v->errors();
        } else{
             Eventos::insert($Request->except("_token"));
             return "Exito";
        } 
}

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $Request)
    {

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
        $v = \Validator::make($Request->all(), [
            'nombre_evento'          => 'required',
            'fecha'                  => 'required',
            'email_evento'           => 'required|unique:eventos,email_evento,'.$Request->id,
            'tipo'                   => 'required|numeric',
            'estado_pago'            => 'required',
            'precio'                 => 'required|numeric',
            'inscripcion_habilitada' => 'required|numeric',
            'auto_email'             => 'required|numeric',
            'auto_numeracion'        => 'required|numeric',
        ]);

        if ($v->fails()){
            return $v->errors();
        } else{
             Eventos::where($Request->only("id"))->update($Request->except("_method"));
        } 

        return Eventos::where($Request->only("id"))->with("categorias")->get();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {   
        Formularios::where("id_evento", $id)->delete();
        Eventos::where("id", $id)->delete();
        return "Exito";
    }
    public function general()
    {
       return $Eventos = Eventos::whereIn("id_usuario", self::Rol())->with("categorias.participantes")->get();
    }
}