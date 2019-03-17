<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('nombre');
            $table->string('email')->unique();
            $table->timestamp('email_verificado')->nullable();
            $table->string('password');
            $table->string('dni')->nullable();
            $table->string('direccion')->nullable();
            $table->string('ciudad')->nullable();
            $table->string('estado')->nullable();
            $table->integer('codigo_postal')->nullable();
            $table->integer('rol')->unsigned()->fillable();
            $table->rememberToken();
            $table->timestamps();
            $table->foreign('rol')->references('id')->on('roles_de_usuario');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}


