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
            $table->increments('id_participante');
            $table->string('nombre_participante');
            $table->string('apellido');
            $table->string('email_participante')->unique();
            $table->string('dni')->unique();
            $table->date('nacimiento');
            $table->integer('edad')->unsigned();
            $table->string('sexo')->nullable();
            $table->integer('id_categoria')->unsigned();
            $table->foreign('id_categoria')->references('id_categoria')->on('categorias');
            $table->integer('id_estado_inscripcion')->default('1')->unsigned();
            $table->foreign('id_estado_inscripcion')->references('id_estado_inscripcion')->on('estado_inscripcion');;
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
