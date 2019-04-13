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
}
