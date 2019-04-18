<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Schema;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use App\RolesDeUsuario;
use App\Usuarios;
use App\Eventos;
use App\Categorias;
use App\Participantes;
use App\CambiarEmail;
use App\ResetearContrasena;
use App\RegistroAdminTemp;
use Hash;
use Route;
use View;

class InformesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(){
        if (session()->get("rol")==1) { $ConsultaRol=Usuarios::select("id")->get()->toArray();  } if(session()->get("rol")==2) { $ConsultaRol[0]=session()->get("id"); }   if(session()->get("rol")==3) { $ConsultaRol[0]=session()->get("usuario_padre"); }  

        $Participantes = Participantes::whereIn('id_usuario', $ConsultaRol)->with("estado_inscripcion")->get();
        $Categorias = Categorias::whereIn('id_usuario', $ConsultaRol)->count();
        return view("informes.informes", ["Participantes" => $Participantes, "Categorias" => $Categorias]);
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
    public function update(Request $request, $id)
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

    public function DescargarInforme($tipo)
    {

        if (\Request::path()=="DescargarInforme/1") {
            $NombreArchivo="ParticipantesTotales.xlsx";
        }
        if (\Request::path()=="DescargarInforme/2") {
            $NombreArchivo="ParticipantesPreInscritos.xlsx";
        }
        if (\Request::path()=="DescargarInforme/3") {
            $NombreArchivo="ParticipantesInscritos.xlsx";
        }
        if (\Request::path()=="DescargarInforme/4") {
            $NombreArchivo="ParticipantesAcreditados.xlsx";
        }
        return Excel::download(new InformesExcel, $NombreArchivo);
    }

}



class InformesExcel implements FromCollection, WithHeadings, ShouldAutoSize {

    use Exportable;

    public function collection(){
        if (\Request::path()=="DescargarInforme/1") {
            $Datos = Participantes::where("id_usuario", session()->get("id"))->select("nombre_participante", "apellido", "email_participante", "dni", "nacimiento", "edad", "sexo")->get();

            for ($i=0; $i <count($Datos); $i++) { 
                if ($Datos[$i]->sexo=="0") {
                    $Datos[$i]->sexo="Masculino";
                } else{
                    $Datos[$i]->sexo="Femenino";
                }
            }
        }

        if (\Request::path()=="DescargarInforme/2") {
            $Datos = Participantes::where("id_usuario", session()->get("id"))
                        ->select("nombre_participante", "apellido", "email_participante", "dni", "nacimiento", "edad", "sexo")
                            ->whereHas("estado_inscripcion", function($query){
                               $query->where('estado_inscripcion.id', "1");
                            })->get();
            for ($i=0; $i <count($Datos); $i++) { 
                if ($Datos[$i]->sexo=="0") {
                    $Datos[$i]->sexo="Masculino";
                } else{
                    $Datos[$i]->sexo="Femenino";
                }
            }
        }
        if (\Request::path()=="DescargarInforme/3") {
            $Datos = Participantes::where("id_usuario", session()->get("id"))
                        ->select("nombre_participante", "apellido", "email_participante", "dni", "nacimiento", "edad", "sexo")
                            ->whereHas("estado_inscripcion", function($query){
                               $query->where('estado_inscripcion.id', "2");
                            })->get();
            for ($i=0; $i <count($Datos); $i++) { 
                if ($Datos[$i]->sexo=="0") {
                    $Datos[$i]->sexo="Masculino";
                } else{
                    $Datos[$i]->sexo="Femenino";
                }
            }
        }

        if (\Request::path()=="DescargarInforme/4") {
            $Datos = Participantes::where("id_usuario", session()->get("id"))
                        ->select("nombre_participante", "apellido", "email_participante", "dni", "nacimiento", "edad", "sexo")
                            ->whereHas("estado_inscripcion", function($query){
                               $query->where('estado_inscripcion.id', "3");
                            })->get();
            for ($i=0; $i <count($Datos); $i++) { 
                if ($Datos[$i]->sexo=="0") {
                    $Datos[$i]->sexo="Masculino";
                } else{
                    $Datos[$i]->sexo="Femenino";
                }
            }
        }

         return $Datos;
    }


    public function headings(): array
    {
        
        if (\Request::path()=="DescargarInforme/1" || \Request::path()=="DescargarInforme/2" || \Request::path()=="DescargarInforme/3" || \Request::path()=="DescargarInforme/4") { 

        return $hed =[
                      'Nombres',
                      'Apellidos',
                      'Email',
                      'DNI',
                      'Nacimiento',
                      'Edad',
                      'Sexo'
                    ];;
        }

        
    }
}
