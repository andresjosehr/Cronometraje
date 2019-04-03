<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Formularios;

class InscripcionController extends Controller
{
    public function showForm($codigo){
    	$Formulario=Formularios::whereHas('eventos', function ($query) {
                    $query->where('id_usuario', session()->get("id"));
                })->with("campos.subcampos")->where("codigo", $codigo)->get();

    	return view("inscripcion.inscripcion", ["Formulario" => $Formulario]);
    }
}
