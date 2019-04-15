<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Eventos extends Model
{
    public $timestamps = false;
    protected $table = "eventos";

    public function formularios()
    {
    	return $this->hasMany(Formularios::class, "id_evento");
    }

    public function categorias()
    {
        return $this->hasOne(Categorias::class, "id", "id_categoria");
    }

    public function numeracion()
    {
        return $this->hasMany(EventosNumeracion::class, "id_evento");
    }
}
