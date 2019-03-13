<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

         DB::table('roles_de_usuario')->delete();
        DB::table("roles_de_usuario")->insert(array(
            'nombre'     => 'Super Administrador',
        ));
        DB::table("roles_de_usuario")->insert(array(
            'nombre'     => 'Evento Administrador',
        ));
        DB::table("roles_de_usuario")->insert(array(
            'nombre'     => 'Loader',
        ));


        DB::table('usuarios')->delete();
        DB::table("usuarios")->insert(array(
            'nombre'     => 'Jose Andres',
            'email' => 'joseandreshernandezross@gmail.com',
            'email' => 'joseandreshernandezross@gmail.com',
            'dni' => '24572052',
            'direccion' => 'El Faro',
            'ciudad' => 'Maturin',
            'estado' => 'Monagas',
            'codigo_postal' => '1070',
            'rol' => '1',
            'password' => Hash::make('Paralelepipe2')
        ));


        DB::table("usuarios")->insert(array(
            'nombre'     => 'Jose Andres',
            'email' => 'Epale@gmail.com',
            'dni' => '24572052',
            'direccion' => 'El Faro',
            'ciudad' => 'Maturin',
            'estado' => 'Monagas',
            'codigo_postal' => '1070',
            'rol' => '1',
            'password' => Hash::make('Paralelepipe2')
        ));
    }
}