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
         $Participantes = Participantes::select('participantes.id as id_participante', 'participantes.*', 'categorias.id as id_categoria_cat', 'categorias.*', 'estado_inscripcion.id as id_estado_inscripcion_ins', 'estado_inscripcion.nombre_estado_inscripcion')
                            ->Join("categorias", "participantes.id_categoria", "=", "categorias.id")
                            ->Join("eventos", "categorias.id_evento", "=", "eventos.id")
                            ->Join("estado_inscripcion", "participantes.id_estado_inscripcion", "=", "estado_inscripcion.id")
                            ->where("eventos.id_usuario", session()->get("id"))->get(); 

        $Categorias = Categorias::select('categorias.id', 'categorias.nombre_categoria')->join("eventos", "categorias.id_evento", "=", "eventos.id")->where("eventos.id_usuario", session()->get("id"))->get();


        return view("participantes.participantes", ["Participantes" => $Participantes, "Categorias" => $Categorias]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $Request)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function createPost(Request $Request)
    {
        $v = \Validator::make($Request->all(), [
            'nombre_participante'   => 'required',
            'apellido'              => 'required',
            'email_participante'    => 'required|unique:participantes',
            'dni'                   => 'required|unique:participantes',
            'nacimiento'            => 'required|date|date_format:Y-m-d',
            'sexo'                  => 'required|numeric',
            'id_categoria'          => 'numeric',
            'id_estado_inscripcion' => 'required|numeric',
        ]);
       if ($v->fails()){
            return $v->errors();
       }
       else{

        Participantes::insert($Request->all());
        return Participantes::select('participantes.id as id_participante', 'participantes.*', 'categorias.id as id_categoria_cat', 'categorias.*', 'estado_inscripcion.id as id_estado_inscripcion_ins', 'estado_inscripcion.nombre_estado_inscripcion')
                                        ->Join("categorias", "participantes.id_categoria", "=", "categorias.id")
                                        ->Join("eventos", "categorias.id_evento", "=", "eventos.id")
                                        ->Join("estado_inscripcion", "participantes.id_estado_inscripcion", "=", "estado_inscripcion.id")
                                        ->where("participantes.email_participante", $Request->email_participante)->first(); 
       }
    }


    public function store(Request $Request)
    {
        if ($Request->nombre_participante) {

            if (session()->get("email")!=$Request->email) {
                    $v = \Validator::make($Request->all(), [
                    'id'       => 'required',
                    'nombre_participante'   => 'required',
                    'apellido'              => 'required',
                    'email_participante'    => 'required|unique:participantes,id,'.$Request->id,
                    'dni'                   => 'required|unique:participantes,id,'.$Request->id,
                    'nacimiento'            => 'required|date|date_format:Y-m-d',
                    'sexo'                  => 'required|numeric',
                    'id_categoria'          => 'required|numeric',
                    'id_estado_inscripcion' => 'required|numeric',
                ]);
            }
     
            if ($v->fails()){

                foreach (json_decode(json_encode($v->errors()), true) as $campo => $error) {
                    ?><script>
                        $('#edit_path [name="<?php echo $campo; ?>"]').addClass("is-invalid");
                        $('#edit_path [name="<?php echo $campo; ?>"]').after('<small id="invalid-feedback" style="color:red;"><?php echo $error[0] ?></small>');
                    </script><?php
                }   
            } else{
             Participantes::where("id", $Request->id)->update($Request->except('id'));
             $ParticipanteActualizado = Participantes::select('participantes.id as id_participante', 'participantes.*', 'categorias.id as id_categoria_cat', 'categorias.*', 'estado_inscripcion.id as id_estado_inscripcion_ins', 'estado_inscripcion.nombre_estado_inscripcion')
                                        ->Join("categorias", "participantes.id_categoria", "=", "categorias.id")
                                        ->Join("eventos", "categorias.id_evento", "=", "eventos.id")
                                        ->Join("estado_inscripcion", "participantes.id_estado_inscripcion", "=", "estado_inscripcion.id")
                                        ->where("participantes.id", $Request->id)->first(); 

                    ?><script>
                    var ParticipanteActualizado = '<?php echo json_encode($ParticipanteActualizado); ?>';
                    ParticipanteActualizado=JSON.parse(ParticipanteActualizado);
                    exitoUpdatePart(ParticipanteActualizado);
                    </script><?php
            }
        }

        if ($Request->id_estado_inscripcion) {
            Participantes::where("id", $Request->id)->update($Request->except("id"));
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