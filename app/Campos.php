<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Campos extends Model
{
    public $timestamps = false;
    protected $table = 'campos';


    public function subcampos()
    {
    	return $this->hasMany(SubCampos::class, "id_campo");
    }


    public function formularios()
    {
    	return $this->belongsTo(Campos::class, "id_formulario");
    }
}
