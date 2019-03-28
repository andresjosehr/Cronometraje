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
}
