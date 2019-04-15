<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use View;
use App\Participantes;
use App\Categorias;
use App\Eventos;
use App\EventosNumeracion;
use App\DatosParticipante;
use App\Participantes_Categorias;

class ParticipantesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $Participantes = Participantes::where("id_usuario", session()->get("id"))->with("categorias")->get();
        $Categorias = Categorias::where("id_usuario", session()->get("id"))->get();

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

        $Request->merge(["id_usuario" => session()->get("id")]);

        if (count($Request->id_categoria)>1){
        } else{
            $Categorias = Categorias::where("id_usuario", session()->get("id"))->get();
            $i=0;
            foreach ($Categorias as $Categoria) {
                if ($Categoria->edad_minima<=$Request->edad && $Categoria->edad_maxima>=$Request->edad && $Categoria->sexo==$Request->sexo) {
                    $Cate[$i]=$Categoria->id;
                    $i++;
                }
            }
            $Request->merge(["id_categoria" => $Cate]);
        }

        $v = \Validator::make($Request->all(), [
            'nombre_participante'   => 'required',
            'apellido'              => 'required',
            'email_participante'    => 'required|unique:participantes',
            'dni'                   => 'required|unique:participantes',
            'nacimiento'            => 'required|date|date_format:Y-m-d',
            'sexo'                  => 'required|numeric'
        ]);
       if ($v->fails()){
            return $v->errors();
       }
       else{

        Participantes::insert($Request->except("id_categoria"));
        $Participante=Participantes::where($Request->only("email_participante"))->first();

        foreach ($Request->id_categoria as $Categoria) {
            if ($Categoria!=0) {
                Participantes_Categorias::insert([
                    "id_participante" => $Participante->id,
                    "id_categoria" => $Categoria,
                ]);
            }
        }

             $Eventos = Eventos::whereIn("id_categoria", $Request->id_categoria)->with("numeracion")->get();
            

            foreach ($Eventos as $Evento) {
                if ($Evento->auto_numeracion==1) {
                    if ($Evento->numeracion=="[]") {
                        EventosNumeracion::insert([
                            "id_evento" => $Evento->id,
                            "id_participante" => $Participante->id,
                            "numeracion" => 1,
                        ]);
                    } else{
                        $num=0;
                        foreach ($Evento->numeracion as $Numeracion) {
                            if($Numeracion->numeracion>$num){
                                $num=$Numeracion->numeracion;
                            }
                        }
                        EventosNumeracion::insert([
                            "id_evento" => $Evento->id,
                            "id_participante" => $Participante->id,
                            "numeracion" => $num+1,
                        ]);
                    }
                }

                if ($Evento->auto_email==1) {
                    self::emailInscripcion($Participante->email, $Evento->mensaje_inscripcion);
                }
            }

          return "Exito";

       }
    }

    public function updateListPart(Request $Request){
        $Participantes = Participantes::where("id_usuario", session()->get("id"))->with("categorias")->get();
        $Categorias = Categorias::where("id_usuario", session()->get("id"))->get();

        return view("participantes.lista", ["Participantes" => $Participantes, "Categorias" => $Categorias]);
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


    public function emailInscripcion($destinatario, $mensaje){


        $header = "From: Cronometraje <no-responder@cronometraje.com> \r\n";
        $header .= "Bcc: cronometraje@gmail.com \r\n";
        $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
        $header .= "Mime-Version: 1.0 \r\n";
        $header .= "Content-Type: text/html";

        $body=(string)View::make('emails.inscripcion_participante', ["mensaje" => $mensaje]);
        mail($destinatario, "Cronometraje - Reseteo de contraseña", $body, $header) or die("No Enviado");
    }
}
