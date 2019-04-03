<!doctype html>
<html class="no-js h-100" lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Cronometraje | Panel de Control</title>
        <meta name="description" content="A high-quality &amp; free Bootstrap admin dashboard template pack that comes with lots of templates and components.">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="{{ asset('/css/default.min.css') }}">
        <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
        <script src="https://cdn.datatables.net/1.10.18/js/dataTables.bootstrap4.min.js"></script>
        <!-- Include the plugin's CSS and JS: -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.15/css/bootstrap-multiselect.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.15/js/bootstrap-multiselect.js"></script>
        <script>
            var url = '{{Request::root()}}';
              $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

        </script>
    </head>
    <body style="background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://www.massageceumonkey.com/wp-content/uploads/2018/03/Massage-Therapy-for-Athletes-Endurance-and-Recovery.jpg');background-size: cover; background-repeat: no-repeat;background-attachment: fixed;">
    <section>
      <div class="card" style="width: 40rem;margin-top: 12rem;margin-bottom: 12rem;" align="center">
        <div style="background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('http://ww.vallartasport.com/images/deportes/carreras-6.jpg');height: 250px;background-size: cover;background-position: left;border-radius: 0.625rem;display: table;">
          <h3 class="card-title" style="color: white;display: table-cell;vertical-align: middle;">{{$Formulario[0]->nombre_formulario}}</h3>
        </div>
        <div class="card-body">
            @if (isset($Formulario[0]->img))
            <img src="{{ asset('public/img/crono/')."/".$Formulario[0]->img }}" width="100" height="100" alt="" style="margin-bottom: 30px">
          @endif
            <div class="row">
                <div class="form-group col-md-6">
                  <strong class="text-muted d-block mb-2 stro_form">Nombres</strong>
                  <input type="text" class="form-control" id="nombres" name="nombre_participante" placeholder="Ingresa tus nombres" required="">
                </div>
                <div class="form-group col-md-6">
                  <strong class="text-muted d-block mb-2 stro_form">Apellidos</strong>
                  <input type="text" class="form-control" id="apellidos" name="nombre_participante" placeholder="Ingresa tus apellidos" required="">
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                  <strong class="text-muted d-block mb-2 stro_form">Email</strong>
                  <input type="email" class="form-control" id="email" name="nombre_participante" placeholder="Ingresa tu email" required="">
                </div>
                <div class="form-group col-md-6">
                  <strong class="text-muted d-block mb-2 stro_form">DNI</strong>
                  <input type="text" class="form-control" id="dni" name="nombre_participante" placeholder="Ingresa tu DNI" required="">
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                  <strong class="text-muted d-block mb-2 stro_form">Nacimiento</strong>
                  <input type="text" class="form-control" id="nacimiento" name="nombre_participante" placeholder="Ingresa tu nacimiento" required="">
                </div>
                <div class="form-group col-md-6">
                  <strong class="text-muted d-block mb-2 stro_form">Sexo</strong>
                  <select class="form-control">
                    <option selected="" value="null">Escoge tu sexo</option>
                    <option value="0">Masculino</option>
                    <option value="1">Femenino</option>
                  </select>
                </div>
            </div>
            @foreach ($Formulario[0]->campos as $Campo)
            <div class="row">
                <div class="form-group col-md-12">
                    
                  @if ($Campo->tipo=="text" || $Campo->tipo=="date" || $Campo->tipo=="email")
                    <strong class="text-muted d-block mb-2 stro_form">{{$Campo->nombre}}</strong>
                    <input type="@if($Campo->tipo=='date')text @else{{$Campo->tipo}}@endif" class="form-control" id="dni" name="nombre_participante" placeholder="{{$Campo->descripcion}}" required="">
                  @endif

                  @if ($Campo->tipo=="select")
                    <strong class="text-muted d-block mb-2 stro_form">{{$Campo->nombre}}</strong>
                    <select class="form-control">
                        <option selected="" value="0">{{$Campo->descripcion}}</option>
                        @foreach ($Campo->subcampos as $SubCampo)
                            <option value="{{$SubCampo->descripcion}}">{{$SubCampo->descripcion}}</option>
                        @endforeach
                    </select>
                  @endif

                  @if ($Campo->tipo=="multiselect")
                    <strong class="text-muted d-block mb-2 stro_form">{{$Campo->nombre}}</strong>
                    <select id="campos_{{$Campo->id}}" multiple="multiple" class="form-control">
                      @foreach ($Campo->subcampos as $SubCampo)
                        <option>{{$SubCampo->descripcion}}</option>
                      @endforeach
                    </select>
                    <script>
                        $(document).ready(function() {
                            $('#campos_{{$Campo->id}}').multiselect({
                               nonSelectedText: '{{$Campo->descripcion}}',
                               nSelectedText: "Seleccionados",
                               allSelectedText: false,
                             });
                        });
                    </script>
                  @endif

                  @if ($Campo->tipo=="file")
                    <div class="form-group" style="display: flex;">
                        <input type="text" class="form-control" placeholder="{{$Campo->descripcion}}" readonly>
                        <label class="input-group-btn" style="margin-bottom: 0px">
                            <span class="btn btn-primary">
                                Subir&nbsp;Imagen <input type="file" id="{{-- file_{{$Formulario->id}} --}}" style="display: none;" multiple>
                            </span>
                        </label>
                    </div>
                  @endif

                  @if ($Campo->tipo=="pago")
                    @php echo $Campo->codigo_pago @endphp
                  @endif
                </div>
            </div>
            @endforeach
            <div class="row">
                <div class="form-group col-md-12">
                    <button class="btn btn-primary btn-block">Guardar Cambios</button>
                </div>
           </div>
        </div>
      </div>
    </section>

    <style>
      .card {
        margin: 0 auto; /* Added */
        float: none; /* Added */
        margin-bottom: 10px; /* Added */
        }

        .stro_form{
            text-align: left;
            margin-left: 4px;
        }
    </style>


        <script src="{{ asset('/js/default.min.js') }}"></script>
        <script src="{{ asset('/js/app.js') }}"></script>
    </body>
</html>