<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DatosParticipante extends Model
{
    public $timestamps = false;
    protected $table = 'datos_participante';


    public function campos()
    {
    	return $this->belongsTo(Campos::class, "id_campo");
    }
}
