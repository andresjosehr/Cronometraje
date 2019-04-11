<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Participantes;
use App\Categorias;
use App\DatosParticipante;

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


        if ($Request->DefaultDataForm["act_status"]=="false") {

            if (session()->get("email")!=$Request->DefaultDataForm["email_participante"]) {
                    $v = \Validator::make($Request->DefaultDataForm, [
                    'id'       => 'required',
                    'nombre_participante'   => 'required',
                    'apellido'              => 'required',
                    'email_participante'    => 'required|unique:participantes,email_participante,'.$Request->DefaultDataForm["id"],
                    'dni'                   => 'required|numeric|unique:participantes,dni,'.$Request->DefaultDataForm["id"],
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
                        $( ".upd_participante_loading" ).fadeOut(250, function () {
                          $( ".upd_participante_btn" ).fadeIn(250);
                        });
                    </script><?php
                }   
            } else{

             $DefaultDataForm=$Request->DefaultDataForm;
             unset($DefaultDataForm["act_status"]);

             Participantes::where("id", $Request->DefaultDataForm["id"])->update($DefaultDataForm);
             $ParticipanteActualizado = Participantes::select('participantes.id as id_participante', 'participantes.*', 'categorias.id as id_categoria_cat', 'categorias.*', 'estado_inscripcion.id as id_estado_inscripcion_ins', 'estado_inscripcion.nombre_estado_inscripcion')
                                        ->Join("categorias", "participantes.id_categoria", "=", "categorias.id")
                                        ->Join("eventos", "categorias.id_evento", "=", "eventos.id")
                                        ->Join("estado_inscripcion", "participantes.id_estado_inscripcion", "=", "estado_inscripcion.id")
                                        ->where("participantes.id", $Request->DefaultDataForm["id"])->first(); 

            foreach ($Request->CustomDataForm as $key => $value) {

                DatosParticipante::where("id", explode("_", $key)[count(explode("_", $key))-1])->update([
                    "valor" => $value
                ]);
            }

            return $ParticipanteActualizado;
            }
        }

        if ($Request->act_status=="true") {
            Participantes::where("id", $Request->id)->update($Request->only("id_estado_inscripcion"));
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
    public function destroy($email)
    {
        $Part = Participantes::where("email_participante", $email)->select("id")->first();
        DatosParticipante::where("id_participante", $Part->id)->delete();
        return "Exito";
    }
}
