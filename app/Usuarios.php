<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuarios extends Model
{
	public $timestamps = false;
	
    protected $table = 'usuarios';

    protected $fillable = array('nombre', 'password', 'email');
}
