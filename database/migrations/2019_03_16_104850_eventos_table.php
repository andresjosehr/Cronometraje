<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class EventosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('eventos', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('nombre_evento');
            $table->string('fecha');
            $table->string('email_evento')->unique();
            $table->string('localidad')->nullable();
            $table->integer('tipo')->unsigned();
            $table->foreign('tipo')->references('id')->on('tipo_evento');
            $table->string('estado_pago')->nullable();
            $table->string('precio')->nullable();
            $table->boolean('inscripcion_habilitada');
            $table->boolean('auto_email');
            $table->boolean('auto_numeracion');
            $table->text('mensaje_inscripcion');
            $table->text('mensaje_aprobacion_pago');
            $table->integer('id_categoria')->unsigned()->nullable()->defaul(null);
            $table->foreign('id_categoria')->references('id')->on('categorias');
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
