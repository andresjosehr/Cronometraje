<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ParticipantesCategoriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('participantes_categorias', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_participante')->unsigned();
            $table->foreign('id_participante')->references('id')->on('participantes');
            $table->integer('id_categoria')->unsigned();
            $table->foreign('id_categoria')->references('id')->on('categorias');
            $table->integer('id_estado_inscripcion')->default('1')->unsigned();
            $table->foreign('id_estado_inscripcion')->references('id')->on('estado_inscripcion');
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
