<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categorias;
use App\Eventos;
use App\Participantes_Categorias;

class CategoriasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Categorias = Categorias::where("id_usuario", session()->get("id"))->get();

        return view("categorias.categorias", ["Categorias" => $Categorias]);
    }

    public function categoriras_act()
    {
        $Categorias = Categorias::where("id_usuario", session()->get("id"))->get();

        return view("categorias.lista", ["Categorias" => $Categorias]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $Request)
    {
        $Request->merge(["id_usuario" => session()->get("id")]);

        $v = \Validator::make($Request->all(), [
                'nombre_categoria' => 'required',
                'sexo'             => 'required|numeric',
                'edad_minima'      => 'required|numeric',
                'edad_maxima'      => 'required|numeric',
            ]);

            if ($v->fails()){
                return $v->errors();
            } else{
                 Categorias::insert($Request->except("_token"));
                 return "Exito";
            } 
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
                'nombre_categoria' => 'required',
                'sexo'             => 'required|numeric',
                'edad_minima'      => 'required|numeric',
                'edad_maxima'      => 'required|numeric',
            ]);

        if ($v->fails()){
            return $v->errors();
        } else{
             Categorias::where($Request->only("id"))->update($Request->except("_method"));
        } 

        return Categorias::where($Request->only("id"))->get();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Participantes_Categorias::where("id_categoria", $id)->delete();
        Eventos::where("id_categoria", $id)->update(["id_categoria" => null]);
        Categorias::where("id", $id)->delete();
    }
}
