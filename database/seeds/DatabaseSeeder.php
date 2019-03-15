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

        //  DB::table('roles_de_usuario')->delete();
        // DB::table("roles_de_usuario")->insert(array(
        //     'nombre'     => 'Super Administrador',
        // ));
        // DB::table("roles_de_usuario")->insert(array(
        //     'nombre'     => 'Evento Administrador',
        // ));
        // DB::table("roles_de_usuario")->insert(array(
        //     'nombre'     => 'Loader',
        // ));


        // DB::table('usuarios')->delete();
        // DB::table("usuarios")->insert(array(
        //     'nombre'     => 'Jose Andres',
        //     'email' => 'joseandreshernandezross@gmail.com',
        //     'email' => 'joseandreshernandezross@gmail.com',
        //     'dni' => '24572052',
        //     'direccion' => 'El Faro',
        //     'ciudad' => 'Maturin',
        //     'estado' => 'Monagas',
        //     'codigo_postal' => '1070',
        //     'rol' => '1',
        //     'password' => Hash::make('Paralelepipe2')
        // ));


        DB::table("usuarios")->insert(array(
            'nombre'     => 'Usuario Prueba',
            'email' => 'usuario14@gmail.com',
            'dni' => '123456',
            'direccion' => 'El Faro',
            'ciudad' => 'Maturin',
            'estado' => 'Monagas',
            'codigo_postal' => '1070',
            'rol' => '1',
            'password' => Hash::make('12345678')
        ));
        DB::table("usuarios")->insert(array(
            'nombre'     => 'Usuario Prueba',
            'email' => 'usuario13@gmail.com',
            'dni' => '123456',
            'direccion' => 'El Faro',
            'ciudad' => 'Maturin',
            'estado' => 'Monagas',
            'codigo_postal' => '1070',
            'rol' => '1',
            'password' => Hash::make('12345678')
        ));
        DB::table("usuarios")->insert(array(
            'nombre'     => 'Usuario Prueba',
            'email' => 'usuari12o@gmail.com',
            'dni' => '123456',
            'direccion' => 'El Faro',
            'ciudad' => 'Maturin',
            'estado' => 'Monagas',
            'codigo_postal' => '1070',
            'rol' => '1',
            'password' => Hash::make('12345678')
        ));
        DB::table("usuarios")->insert(array(
            'nombre'     => 'Usuario Prueba',
            'email' => 'usuario11@gmail.com',
            'dni' => '123456',
            'direccion' => 'El Faro',
            'ciudad' => 'Maturin',
            'estado' => 'Monagas',
            'codigo_postal' => '1070',
            'rol' => '1',
            'password' => Hash::make('12345678')
        ));
        DB::table("usuarios")->insert(array(
            'nombre'     => 'Usuario Prueba',
            'email' => 'usuario9@gmail.com',
            'dni' => '123456',
            'direccion' => 'El Faro',
            'ciudad' => 'Maturin',
            'estado' => 'Monagas',
            'codigo_postal' => '1070',
            'rol' => '1',
            'password' => Hash::make('12345678')
        ));
        DB::table("usuarios")->insert(array(
            'nombre'     => 'Usuario Prueba',
            'email' => 'usuario8@gmail.com',
            'dni' => '123456',
            'direccion' => 'El Faro',
            'ciudad' => 'Maturin',
            'estado' => 'Monagas',
            'codigo_postal' => '1070',
            'rol' => '1',
            'password' => Hash::make('12345678')
        ));
        DB::table("usuarios")->insert(array(
            'nombre'     => 'Usuario Prueba',
            'email' => 'usuario7@gmail.com',
            'dni' => '123456',
            'direccion' => 'El Faro',
            'ciudad' => 'Maturin',
            'estado' => 'Monagas',
            'codigo_postal' => '1070',
            'rol' => '1',
            'password' => Hash::make('12345678')
        ));
        DB::table("usuarios")->insert(array(
            'nombre'     => 'Usuario Prueba',
            'email' => 'usuario6@gmail.com',
            'dni' => '123456',
            'direccion' => 'El Faro',
            'ciudad' => 'Maturin',
            'estado' => 'Monagas',
            'codigo_postal' => '1070',
            'rol' => '1',
            'password' => Hash::make('12345678')
        ));
        DB::table("usuarios")->insert(array(
            'nombre'     => 'Usuario Prueba',
            'email' => 'usuario5@gmail.com',
            'dni' => '123456',
            'direccion' => 'El Faro',
            'ciudad' => 'Maturin',
            'estado' => 'Monagas',
            'codigo_postal' => '1070',
            'rol' => '1',
            'password' => Hash::make('12345678')
        ));
        DB::table("usuarios")->insert(array(
            'nombre'     => 'Usuario Prueba',
            'email' => 'usuario4@gmail.com',
            'dni' => '123456',
            'direccion' => 'El Faro',
            'ciudad' => 'Maturin',
            'estado' => 'Monagas',
            'codigo_postal' => '1070',
            'rol' => '1',
            'password' => Hash::make('12345678')
        ));
        DB::table("usuarios")->insert(array(
            'nombre'     => 'Usuario Prueba',
            'email' => 'usuario3@gmail.com',
            'dni' => '123456',
            'direccion' => 'El Faro',
            'ciudad' => 'Maturin',
            'estado' => 'Monagas',
            'codigo_postal' => '1070',
            'rol' => '1',
            'password' => Hash::make('12345678')
        ));
        DB::table("usuarios")->insert(array(
            'nombre'     => 'Usuario Prueba',
            'email' => 'usuario2@gmail.com',
            'dni' => '123456',
            'direccion' => 'El Faro',
            'ciudad' => 'Maturin',
            'estado' => 'Monagas',
            'codigo_postal' => '1070',
            'rol' => '1',
            'password' => Hash::make('12345678')
        ));
        DB::table("usuarios")->insert(array(
            'nombre'     => 'Usuario Prueba',
            'email' => 'usuario1@gmail.com',
            'dni' => '123456',
            'direccion' => 'El Faro',
            'ciudad' => 'Maturin',
            'estado' => 'Monagas',
            'codigo_postal' => '1070',
            'rol' => '1',
            'password' => Hash::make('12345678')
        ));
    }
}
