<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {               DB::table('participantes')->delete();
                    DB::table('categorias')->delete();
                    DB::table('eventos')->delete();
                    DB::table('usuarios')->delete();
                    DB::table('roles_de_usuario')->delete();
                    DB::table('estado_inscripcion')->delete();
                    DB::table('tipo_evento')->delete();


                    DB::table("roles_de_usuario")->insert([
                        ['id'     => '1', 'nombre'     => 'Super Administrador'],
                        ['id'     => '2', 'nombre'     => 'Evento Administrador'],
                        ['id'     => '3', 'nombre'     => 'Loader'],
                    ]);

                    DB::table("estado_inscripcion")->insert([
                                ['id'     => '1', 'nombre_estado_inscripcion'     => 'Pre-inscrito'],
                                ['id'     => '2', 'nombre_estado_inscripcion'     => 'Inscrito'],
                                ['id'     => '3', 'nombre_estado_inscripcion'     => 'Acreditado'],
                                ['id'     => '4', 'nombre_estado_inscripcion'     => 'Anulado'],
                            ]);

                    DB::table("tipo_evento")->insert([
                        ['id'     => '1', 'nombre_tipo_evento'     => 'Basico'],
                        ['id'     => '2', 'nombre_tipo_evento'     => 'Premium'],
                    ]);



                    DB::table("usuarios")->insert([
                        'id'     => '1',
                        'nombre'     => 'Usuario',
                        'email' => 'usuario@gmail.com',
                        'dni' => '24572052',
                        'direccion' => 'El Faro',
                        'ciudad' => 'Maturin',
                        'estado' => 'Monagas',
                        'codigo_postal' => '1070',
                        'rol' => '1',
                        'password' => Hash::make('secret')
                    ]);




                    $faker = Faker::create();
                    $i=2;
                    foreach (range(1,9) as $index) {
                        DB::table("usuarios")->insert([
                            'id' => $i,
                            'nombre'     => $faker->name,
                            'email' => $faker->email,
                            'dni' => $faker->numberBetween(1000000,9999999),
                            'direccion' => $faker->address,
                            'ciudad' => $faker->city,
                            'estado' => $faker->word,
                            'codigo_postal' => $faker->numberBetween(1000,9999),
                            'rol' => $faker->numberBetween(1,3),
                            'password' => Hash::make('secret')
                        ]);
                        $i++;
                    }


                    $i=1;
                    foreach (range(1,20) as $index) {
                        DB::table("eventos")->insert([
                            'id' => $i,
                            'nombre_evento'     => "Evento ".$i,
                            'email_evento' => $faker->email,
                            'fecha' => $faker->date,
                            'localidad' => $faker->city,
                            'estado_pago' => "Pagado",
                            'precio' => $faker->numberBetween(300,1000),
                            'tipo' => $faker->numberBetween(1,2),
                            'auto_email' => "1",
                            'auto_numeracion' => "1",
                            'inscripcion_habilitada' => "1",
                            'id_usuario' => $faker->numberBetween(1,10)
                        ]);
                        $i++;
                    }

                    $i=1;
                    foreach (range(1,50) as $index) {
                        $EdadMinima=$faker->numberBetween(10,50);
                        DB::table("categorias")->insert([
                            'id' => $i,
                            'nombre_categoria'     => "Categoria ".$i,
                            'edad_minima' => "10",
                            'edad_maxima' => "100",
                            'sexo' => $faker->numberBetween(0,1),
                            'id_evento' => $faker->numberBetween(1,20)
                        ]);
                        $i++;
                    }

                    $i=1;
                    foreach (range(1,750) as $index) {
                        DB::table("participantes")->insert([
                            'id' => $i,
                            'nombre_participante'     => $faker->firstName,
                            'apellido'     => $faker->lastname,
                            'email_participante'     => $faker->email,
                            'dni'     => $faker->numberBetween(1000000,9999999),
                            'nacimiento' => $faker->date,
                            'sexo' =>  null,
                            'edad' =>  $faker->numberBetween(10,60),
                            'id_categoria' =>  $faker->numberBetween(1,40),
                            'id_estado_inscripcion' => $faker->numberBetween(1,4),
                        ]);
                        $i++;
                    }

    }
}
