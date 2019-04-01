<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Formularios extends Model
{
    public $timestamps = false;
    protected $table = "formularios";


    public function eventos()
    {
    	return $this->belongsTo(Eventos::class, "id_evento");
    }

    public function campos()
    {
    	return $this->hasMany(Campos::class, "id_formulario");
    }




}
