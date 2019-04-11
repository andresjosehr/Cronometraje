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
    {               

                    DB::table('sub_campos')->delete();
                    DB::table('campos')->delete();
                    DB::table('formularios')->delete();
                    DB::table('participantes')->delete();
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
                    // $i=2;
                    // foreach (range(1,9) as $index) {
                    //     DB::table("usuarios")->insert([
                    //         'id' => $i,
                    //         'nombre'     => $faker->name,
                    //         'email' => $faker->email,
                    //         'dni' => $faker->numberBetween(1000000,9999999),
                    //         'direccion' => $faker->address,
                    //         'ciudad' => $faker->city,
                    //         'estado' => $faker->word,
                    //         'codigo_postal' => $faker->numberBetween(1000,9999),
                    //         'rol' => $faker->numberBetween(1,3),
                    //         'password' => Hash::make('secret')
                    //     ]);
                    //     $i++;
                    // }


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
                            'id_usuario' => "1",
                        ]);
                        $i++;
                    }

                    $i=1; $EdadMinima=0; $EdadMaxima=9; $Sexo=0;
                    foreach (range(1,18) as $index) {
                        $EdadMinima=$EdadMinima+10;
                        $EdadMaxima=$EdadMaxima+10;
                        DB::table("categorias")->insert([
                            'id' => $i,
                            'nombre_categoria'     => "Categoria ".$i,
                            'edad_minima' => $EdadMinima,
                            'edad_maxima' => $EdadMaxima,
                            'sexo' => $Sexo,
                            'id_evento' => $i,
                        ]);
                        if ($EdadMinima==90) {
                            $EdadMinima=0; $EdadMaxima=9; $Sexo=1;
                        }
                        $i++;
                    }

                    $Categorias=App\Categorias::all();

                    $i=1;
                    foreach (range(1,750) as $index) {

                        $Usuario["Sexo"]=$faker->numberBetween(0, 1);
                        $Usuario["Edad"]=$faker->numberBetween(10, 60);

                        foreach ($Categorias as $Categoria) {
                            if ($Categoria->edad_minima<=$Usuario["Edad"] && $Categoria->edad_maxima>=$Usuario["Edad"] && $Categoria->sexo==$Usuario["Sexo"]) {
                                $Cate=$Categoria->id;
                            }
                        }
                        DB::table("participantes")->insert([
                            'id' => $i,
                            'nombre_participante'     => $faker->firstName,
                            'apellido'     => $faker->lastname,
                            'email_participante'     => $faker->email,
                            'dni'     => $faker->numberBetween(1000000,9999999),
                            'nacimiento' => $faker->date,
                            'sexo' =>  $Usuario["Sexo"],
                            'edad' => $Usuario["Edad"],
                            'id_categoria' =>  $Cate,
                            'id_estado_inscripcion' => $faker->numberBetween(1,4),
                        ]);
                        $i++;
                    }




                    $i=1;
                    foreach (range(1, 50) as $index) {
                        DB::table("formularios")->insert([
                            'id' => $i,
                            'nombre_formulario' => $faker->word,
                            'campos_por_defecto' => $faker->numberBetween(0, 1),
                            'codigo' => $faker->shuffle('aeìojgsdbfvpujb54egryh8nt66sr'),
                            'id_evento' => $faker->numberBetween(1,20)

                        ]);
                        $i++;
                    }


                    $i=1;
                    foreach (range(1, 200) as $index) {
                        DB::table("campos")->insert([
                            'id' => $i,
                            'nombre' => $faker->word,
                            'tipo' => $faker->randomElement($array = array ('text','email','date')),
                            'descripcion' => $faker->sentence($nbWords = 6, $variableNbWords = true),
                            'obligatorio' => $faker->numberBetween(0, 1),
                            'id_formulario' => $faker->numberBetween(1,50)
                        ]);
                        $i++;
                    }

                    $i=220;
                    foreach (range(1, 100) as $index) {
                        DB::table("campos")->insert([
                            'id' => $i,
                            'nombre' => $faker->word,
                            'tipo' => $faker->randomElement($array = array ('select','multiselect')),
                            'descripcion' => $faker->sentence($nbWords = 6, $variableNbWords = true),
                            'obligatorio' => $faker->numberBetween(0, 1),
                            'id_formulario' => $faker->numberBetween(1,50)
                        ]);
                        $i++;

                    }


                     $i=1;
                    foreach (range(1, 400) as $index) {
                        DB::table("sub_campos")->insert([
                            'id' => $i,
                            'descripcion' => $faker->sentence($nbWords = 6, $variableNbWords = true),
                            'id_campo' => $faker->numberBetween(220,231)
                        ]);
                        $i++;

                    }


                    foreach (range(1, 100) as $index) {
                        DB::table("campos")->insert([
                            'nombre' => $faker->word,
                            'tipo' => "file",
                            'descripcion' => $faker->sentence($nbWords = 6, $variableNbWords = true),
                            'obligatorio' => $faker->numberBetween(0, 1),
                            'img' => $faker->numberBetween(0, 1),
                            'pdf' => $faker->numberBetween(0, 1),
                            'id_formulario' => $faker->numberBetween(1,50)
                        ]);
                        $i++;

                    }


                    foreach (range(1, 100) as $index) {
                        DB::table("campos")->insert([
                            'nombre' => $faker->word,
                            'tipo' => "pago",
                            'codigo_pago' => "Pago",
                            'id_formulario' => $faker->numberBetween(1,50)
                        ]);
                        $i++;

                    }




    }
}
