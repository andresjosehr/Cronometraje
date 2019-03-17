<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SubCamposTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sub_campos', function (Blueprint $table) {
            $table->increments('id_sub_campo');
            $table->string('tipo');
            $table->string('nombre_sub_campo');
            $table->string('descripcion');
            $table->integer('id_campo')->unsigned();
            $table->foreign('id_campo')->references('id_campo')->on('campos');
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
