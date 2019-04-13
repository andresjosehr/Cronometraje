<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Participantes extends Model
{	
	public $timestamps = false;
    protected $table = "participantes";

    public function categorias()
    {
    	return $this->belongsToMany(Categorias::class, "participantes_categorias", "id_participante", "id_categoria");
    }

    public function estado_inscripcion()
    {
    	return $this->hasOne(EstadoInscripcion::class, "id" ,"id_estado_inscripcion");
    }
    
}
