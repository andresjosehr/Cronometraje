<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categorias extends Model
{
    public $timestamps = false;
    protected $table = 'categorias';

    public function eventos()
    {
    	return $this->belongsTo(Eventos::class, "id", "id_categoria");
    }

    public function estado_inscripcion()
    {
        return $this->belongsToMany(EstadoInscripcion::class, "participantes_categorias", "id_categoria", "id_estado_inscripcion");
    }

    public function participantes()
    {
        return $this->belongsToMany(Participantes::class, "participantes_categorias", "id_categoria", "id_participante")->withPivot("id_estado_inscripcion");
    }
}
