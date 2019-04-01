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
            $table->increments('id');
            $table->string('nombre')->nullable();
            $table->string('tipo');
            $table->string('descripcion')->nullable();
            $table->string('obligatorio')->nullable();
            $table->string('img')->nullable();
            $table->string('pdf')->nullable();
            $table->text('codigo_pago')->nullable();
            $table->integer('id_formulario')->unsigned();
            $table->foreign('id_formulario')->references('id')->on('formularios')->onDelete('cascade');
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
