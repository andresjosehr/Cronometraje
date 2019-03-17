<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Participantes;
use App\Categorias;

class ParticipantesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Participantes = Participantes::join("categorias", "participantes.id_categoria", "=", "categorias.id_categoria")
                            ->join("eventos", "categorias.id_evento", "=", "eventos.id_evento")
                            ->join("estado_inscripcion", "participantes.id_estado_inscripcion", "=", "estado_inscripcion.id_estado_inscripcion")
                            ->orderBy("id_participante", "ASC")
                            ->where("eventos.id_usuario", session()->get("id"))->get();

        $Categorias = Categorias::join("eventos", "categorias.id_evento", "=", "eventos.id_evento")->where("eventos.id_usuario", session()->get("id"))->get();


        return view("participantes.participantes", ["Participantes" => $Participantes, "Categorias" => $Categorias]);

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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $Request)
    {

        if (session()->get("email")!=$Request->email) {
                $v = \Validator::make($Request->all(), [
                'id_participante'       => 'required',
                'nombre_participante'   => 'required',
                'apellido'              => 'required',
                'email_participante'    => 'required|unique:participantes,id_participante'.$Request->id_participante,
                'dni'                   => 'required|unique:participantes,id_participante'.$Request->id_participante,
                'nacimiento'            => 'required|date|date_format:Y-m-d',
                'sexo'                  => 'required|numeric',
                'id_categoria'          => 'required|numeric',
                'id_estado_inscripcion' => 'required|numeric',
            ]);
        }
 
        if ($v->fails()){

            foreach (json_decode(json_encode($v->errors()), true) as $campo => $error) {
                ?><script>
                    $('[name="<?php echo $campo; ?>"]').addClass("is-invalid");
                    $('[name="<?php echo $campo; ?>"]').after('<small id="invalid-feedback" style="color:red;"><?php echo $error[0] ?></small>');
                </script><?php
            }   
        } else{
            Participantes::where("id_participante", $Request->id_participante)->update($Request->except('id_participante'));
            ?><script>exitoUpdatePart()</script><?php
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
