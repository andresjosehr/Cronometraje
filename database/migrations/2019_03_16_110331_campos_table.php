<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CamposTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('campos', function (Blueprint $table) {
            $table->increments('id_campo');
            $table->string('tipo');
            $table->integer('nombre_formulario');
            $table->integer('descripcion');
            $table->integer('id_formulario')->unsigned();
            $table->foreign('id_formulario')->references('id_formulario')->on('formularios');
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
