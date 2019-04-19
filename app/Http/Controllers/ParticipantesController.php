<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use View;
use App\Participantes;
use App\Categorias;
use App\Eventos;
use App\Usuarios;
use App\EventosNumeracion;
use App\DatosParticipante;
use App\Participantes_Categorias;

class ParticipantesController extends Controller
{

    public function panel_lista_part()
    {   
        
        $Eventos=Eventos::whereIn("id_usuario", self::Rol())->get();
        $PriEvento = Eventos::whereIn("eventos.id_usuario", self::Rol())->orderBy("id", "desc")->with("categorias.participantes")->first();
        if (isset($PriEvento->Categorias->Participantes)) {
        $i=0;
        foreach ($PriEvento->Categorias->Participantes as $Participante) {
            if ($Participante->pivot->id_estado_inscripcion==1) {
                $PriEvento->Categorias->Participantes[$i]['id_inscripcion']='1';
                $PriEvento->Categorias->Participantes[$i]['estado_inscripcion']='Pre-Inscrito';
            }

            if ($Participante->pivot->id_estado_inscripcion==2) {
                $PriEvento->Categorias->Participantes[$i]['id_inscripcion']='2';
                $PriEvento->Categorias->Participantes[$i]['estado_inscripcion']='Inscrito';
            }

            if ($Participante->pivot->id_estado_inscripcion==3) {
                $PriEvento->Categorias->Participantes[$i]['id_inscripcion']='3';
                $PriEvento->Categorias->Participantes[$i]['estado_inscripcion']='Acreditado';
            }

            if ($Participante->pivot->id_estado_inscripcion==4) {
                $PriEvento->Categorias->Participantes[$i]['id_inscripcion']='4';
                $PriEvento->Categorias->Participantes[$i]['estado_inscripcion']='Anulado';
            }

            $i++;
        }

        $PriEvento->Categorias->Participantes;
        $Partici=$PriEvento->Categorias->Participantes;
        $CateCate=Categorias::where("id_usuario", self::Rol())->get();
    } else{
        $Partici="[]";
        $CateCate="[]";
    }

        return view("participantes.lista", ["Participantes" => $Partici, "Categorias" => $CateCate, "Evento" => $PriEvento, "Eventos" => $Eventos]);
    }

   public function Rol() {
       if (session()->get("rol")==1) { 
        $ConsultaRol=Usuarios::select("id")->get()->toArray();  
    } 
    if(session()->get("rol")==2) { 
        $ConsultaRol[0]=session()->get("id"); 
        $ConsultaRol[1]=session()->get("id"); 
    }   if(session()->get("rol")==3) { 
        $ConsultaRol[0]=session()->get("usuario_padre"); 
        $ConsultaRol[1]=session()->get("usuario_padre"); 
    }  
    return $ConsultaRol;
   }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
     
        $Eventos=Eventos::whereIn("id_usuario", self::Rol())->get();
        $PriEvento = Eventos::whereIn("eventos.id_usuario", self::Rol())->orderBy("id", "desc")->with("categorias.participantes")->first();
        if (isset($PriEvento->Categorias->Participantes)) {
        $i=0;
        foreach ($PriEvento->Categorias->Participantes as $Participante) {
            if ($Participante->pivot->id_estado_inscripcion==1) {
                $PriEvento->Categorias->Participantes[$i]['id_inscripcion']='1';
                $PriEvento->Categorias->Participantes[$i]['estado_inscripcion']='Pre-Inscrito';
            }

            if ($Participante->pivot->id_estado_inscripcion==2) {
                $PriEvento->Categorias->Participantes[$i]['id_inscripcion']='2';
                $PriEvento->Categorias->Participantes[$i]['estado_inscripcion']='Inscrito';
            }

            if ($Participante->pivot->id_estado_inscripcion==3) {
                $PriEvento->Categorias->Participantes[$i]['id_inscripcion']='3';
                $PriEvento->Categorias->Participantes[$i]['estado_inscripcion']='Acreditado';
            }

            if ($Participante->pivot->id_estado_inscripcion==4) {
                $PriEvento->Categorias->Participantes[$i]['id_inscripcion']='4';
                $PriEvento->Categorias->Participantes[$i]['estado_inscripcion']='Anulado';
            }

            $i++;
        }

        $PriEvento->Categorias->Participantes;
        $Partici=$PriEvento->Categorias->Participantes;
        $CateCate=Categorias::where("id_usuario", self::Rol())->get();
    } else{
        $Partici=0;
        $CateCate=0;
    }

        return view("participantes.participantes", ["Participantes" => $Partici, "Categorias" => $CateCate, "Evento" => $PriEvento, "Eventos" => $Eventos]);

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
            if ($Evento->auto_email==1) {
                self::emailInscripcion($Request->email_participante, $Evento->mensaje_inscripcion);
            }
        }


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

             Participantes_Categorias::where("id_participante", $Request->DefaultDataForm["id"])->where("id_categoria", $DefaultDataForm["id_categoria"])->update(["id_categoria" => $DefaultDataForm["id_categoria"], "id_estado_inscripcion" => $DefaultDataForm["id_estado_inscripcion"]]);
             unset($DefaultDataForm["id_categoria"]);
             $Id_Categoria=$DefaultDataForm["id_estado_inscripcion"];
             unset($DefaultDataForm["id_estado_inscripcion"]);
             Participantes::where("id", $Request->DefaultDataForm["id"])->update($DefaultDataForm);

             $ParticipanteActualizado=Participantes::where("id", $Request->DefaultDataForm["id"])->with("categorias")->first();
      

             $ParticipanteActualizado['id_inscripcion']=$ParticipanteActualizado->categorias[0]->pivot->id_estado_inscripcion;

             if ($ParticipanteActualizado['id_inscripcion']==1) {
                $ParticipanteActualizado['estado_inscripcion']='Pre-Inscrito';
            }

            if ($ParticipanteActualizado['id_inscripcion']==2) {
                $ParticipanteActualizado['estado_inscripcion']='Inscrito';
            }

            if ($ParticipanteActualizado['id_inscripcion']==3) {
                $ParticipanteActualizado['estado_inscripcion']='Acreditado';
            }

            if ($ParticipanteActualizado['id_inscripcion']==4) {
                $ParticipanteActualizado['estado_inscripcion']='Anulado';
            }
             return $ParticipanteActualizado;
             if ($Request->CustomDataForm!=0) {
                foreach ($Request->CustomDataForm as $key => $value) {

                    DatosParticipante::where("id", explode("_", $key)[count(explode("_", $key))-1])->update([
                        "valor" => $value
                    ]);
                }
            }

            return $ParticipanteActualizado;
            }
        }

        if ($Request->act_status=="true") {
            if ($Request->id_estado_inscripcion==3) {

                 $Categoria = Categorias::where("id", $Request->id_categoria)->first();
                 $Evento = Eventos::where("id", $Categoria->id)->first();
                 $Participante=Participantes::where("id", $Request->id)->first();
                 if ($Evento->auto_email==1) {
                     self::emailInscripcion($Participante->email_participante, $Evento->mensaje_aprobacion_pago);
                 }
             }
             Participantes_Categorias::where("id_participante", $Request->id)->where("id_categoria", $Request->id_categoria)->update($Request->only("id_estado_inscripcion"));
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateList(Request $Request)
    {
        $Eventos=Eventos::where("id_usuario", session()->get("id"))->get();
        $PriEvento = Eventos::where("id", $Request->id)->orderBy("id", "desc")->with("categorias.participantes")->first();

        $i=0;
        foreach ($PriEvento->Categorias->Participantes as $Participante) {
            if ($Participante->pivot->id_estado_inscripcion==1) {
                $PriEvento->Categorias->Participantes[$i]['id_inscripcion']='1';
                $PriEvento->Categorias->Participantes[$i]['estado_inscripcion']='Pre-Inscrito';
            }

            if ($Participante->pivot->id_estado_inscripcion==2) {
                $PriEvento->Categorias->Participantes[$i]['id_inscripcion']='2';
                $PriEvento->Categorias->Participantes[$i]['estado_inscripcion']='Inscrito';
            }

            if ($Participante->pivot->id_estado_inscripcion==3) {
                $PriEvento->Categorias->Participantes[$i]['id_inscripcion']='3';
                $PriEvento->Categorias->Participantes[$i]['estado_inscripcion']='Acreditado';
            }

            if ($Participante->pivot->id_estado_inscripcion==4) {
                $PriEvento->Categorias->Participantes[$i]['id_inscripcion']='4';
                $PriEvento->Categorias->Participantes[$i]['estado_inscripcion']='Anulado';
            }

            $i++;
        }
        $PriEvento->Categorias->Participantes;
        $Categorias = Categorias::where("id_usuario", session()->get("id"))->get();

        echo (string)View::make("participantes.lista", ["Participantes" => $PriEvento->Categorias->Participantes, "Categorias" => $Categorias, "Evento" => $PriEvento, "Eventos" => $Eventos]);
        ?><script>
            $(".upd_seg .act_list").hide("slow", function(){
                $("#ParticipantesLista").show("slow");
            });
            $(".act_list").hide("slow", function(){
                $("#ParticipantesLista").show("slow");
            });
        </script><?php
    }
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

    public function enviar_mail(Request $Request)
    {
        self::CustomInscripcion($Request->email_participante, $Request->contenido, $Request->asunto);
    }

    public function emailInscripcion($destinatario, $mensaje){


        $header = "From: Cronometraje <no-responder@cronometraje.com> \r\n";
        $header .= "Bcc: cronometraje@gmail.com \r\n";
        $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
        $header .= "Mime-Version: 1.0 \r\n";
        $header .= "Content-Type: text/html";

        $body=(string)View::make('emails.inscripcion_participante', ["mensaje" => $mensaje]);
        mail($destinatario, "Cronometraje", $body, $header) or die("No Enviado");
    }

    public function CustomInscripcion($destinatario, $mensaje, $Asunto){


        $header = "From: Cronometraje <no-responder@cronometraje.com> \r\n";
        $header .= "Bcc: cronometraje@gmail.com \r\n";
        $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
        $header .= "Mime-Version: 1.0 \r\n";
        $header .= "Content-Type: text/html";

        $body=(string)View::make('emails.inscripcion_participante', ["mensaje" => $mensaje]);
        mail($destinatario, "Cronometraje | ".$Asunto , $body, $header) or die("No Enviado");
    }
}
