<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Categorias extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categorias', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id_categoria');
            $table->string('nombre_categoria');
            $table->integer('edad_minima');
            $table->integer('edad_maxima');
            $table->string('sexo');
            $table->integer('id_evento')->unsigned()->nullable()->defaul(null);
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
