<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DatosParticipanteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('datos_participante', function (Blueprint $table) {
            $table->increments('id_datos_participante');
            $table->integer('id_campo')->unsigned();
            $table->foreign('id_campo')->references('id_campo')->on('campos');;
            $table->integer('id_sub_campo')->unsigned();
            $table->foreign('id_sub_campo')->references('id_sub_campo')->on('sub_campos');;
            $table->integer('id_participante')->unsigned();
            $table->foreign('id_participante')->references('id_participante')->on('participantes');;
            $table->string('valor');
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
