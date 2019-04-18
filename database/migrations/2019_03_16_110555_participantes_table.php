<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ParticipantesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('participantes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre_participante');
            $table->string('apellido');
            $table->string('email_participante')->unique();
            $table->string('dni')->unique();
            $table->string('nacimiento');
            $table->integer('edad')->unsigned();
            $table->string('sexo')->nullable();
            $table->integer('id_usuario')->unsigned();
            $table->foreign('id_usuario')->references('id')->on('usuarios');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
