<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Formularios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formularios', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre_formulario');
            $table->string('img')->nullable();
            $table->string('codigo');
            $table->integer('campos_por_defecto');
            $table->integer('id_evento')->unsigned();
            $table->foreign('id_evento')->references('id')->on('eventos');
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
