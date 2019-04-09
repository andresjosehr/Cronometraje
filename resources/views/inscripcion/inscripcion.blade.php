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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
        <script>
            var url = '{{Request::root()}}';
              $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

        </script>
        <style>
          .hed_card_ins{
              background: -webkit-linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('{{ asset('public/img/')."/carreras-6.jpg" }}');
              background: -o-linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('{{ asset('public/img/')."/carreras-6.jpg" }}');
              background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('{{ asset('public/img/')."/carreras-6.jpg" }}');
              height: 250px;
              background-size: cover;
              background-position: left;
              border-radius: 0.625rem;
              display: table;
          }
          .body_ins{
            background: -webkit-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('{{ asset('public/img/')."/img_form.jpg" }}');
            background: -o-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('{{ asset('public/img/')."/img_form.jpg" }}');
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('{{ asset('public/img/')."/img_form.jpg" }}');
            background-size: cover; 
            background-repeat: no-repeat;
            background-attachment: fixed;
          }
        </style>
    </head>
    <body class="body_ins">
    <section>
      <div class="card card_ins" align="center">
        <div class="hed_card_ins" style="">
          <h3 class="card-title tit_ins">{{$Formulario[0]->nombre_formulario}}</h3>
        </div>
        <div class="card-body">
            @if (isset($Formulario[0]->img))
            <img src="{{ asset('public/img/crono/')."/".$Formulario[0]->img }}" width="100" height="100" class="img_ins">
          @endif
          <form action="inscripcion" method="POST" enctype="multipart/form-data" id="inscripcionForm">
            @csrf
            <div class="row">
                <div class="form-group col-md-6">
                  <strong class="text-muted d-block mb-2 stro_form">Nombres</strong>
                  <input type="text" class="form-control" id="nombres" name="nombre_participante" placeholder="Ingresa tus nombres" value="{!! old('nombre_participante') !!}" required="">
                </div>
                <div class="form-group col-md-6">
                  <strong class="text-muted d-block mb-2 stro_form">Apellidos</strong>
                  <input type="text" class="form-control" id="apellidos" name="apellido" placeholder="Ingresa tus apellidos" value="{!! old('apellido') !!}" required="">
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                  <strong class="text-muted d-block mb-2 stro_form">Email</strong>
                  <input type="email" class="form-control" id="email" name="email_participante" value="{!! old('email_participante') !!}" placeholder="Ingresa tu email" required="">
                  @if ($errors->has('email_participante'))
                      <small style="color: red">{{ $errors->first('email_participante') }}</small>
                  @endif
                </div>
                <div class="form-group col-md-6">
                  <strong class="text-muted d-block mb-2 stro_form">DNI</strong>
                  <input type="text" class="form-control" id="dni" name="dni" value="{!! old('dni') !!}" placeholder="Ingresa tu DNI" required="">
                   @if ($errors->has('dni'))
                      <small style="color: red">{{ $errors->first('dni') }}</small>
                  @endif
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                  <strong class="text-muted d-block mb-2 stro_form">Nacimiento</strong>
                  <input type="text" class="form-control" id="nacimiento" name="nacimiento" placeholder="Ingresa tu nacimiento" value="{!! old('nacimiento') !!}" required="">
                  @if ($errors->has('nacimiento'))
                      <small style="color: red">{{ $errors->first('nacimiento') }}</small>
                  @endif
                  <input type="hidden" name="edad" id="edad">
                  <input type="hidden" name="id_estado_inscripcion" id="id_estado_inscripcion" value="1">
                </div>
                <div class="form-group col-md-6">
                  <strong class="text-muted d-block mb-2 stro_form">Sexo</strong>
                  <select class="form-control" name="sexo" value="{!! old('sexo') !!}">
                    <option selected="" value="null">Escoge tu sexo</option>
                    <option value="0">Masculino</option>
                    <option value="1">Femenino</option>
                  </select>
                  @if ($errors->has('sexo'))
                      <small style="color: red">Debes indicar tu sexo</small>
                  @endif
                </div>
            </div>
            @foreach ($Formulario[0]->campos as $Campo)
            <div class="row">
                <div class="form-group col-md-12">
                    
                  @if ($Campo->tipo=="text" || $Campo->tipo=="date" || $Campo->tipo=="email")
                    <strong class="text-muted d-block mb-2 stro_form">{{$Campo->nombre}}</strong>
                    <input type="@if($Campo->tipo=='date')text @else{{$Campo->tipo}}@endif" class="form-control" id="id_campo-{{$Campo->id}}" value="{!! old('nombre_campo_'.$Campo->id) !!}" placeholder="{{$Campo->descripcion}}" name="nombre_campo_{{$Campo->id}}" @if ($Campo->obligatorio==1) required="" @endif>
                  @endif
                  @if ($Campo->tipo=="date")
                    <script>
                      $(document).ready(function() {
                        $('#id_campo-{{$Campo->id}}').datepicker({
                           dateFormat: 'yyy-mm-dd'
                        });
                      });
                    </script>
                  @endif

                  @if ($Campo->tipo=="select")
                    <strong class="text-muted d-block mb-2 stro_form">{{$Campo->nombre}}</strong>
                    <select class="form-control" name="nombre_campo_{{$Campo->id}}" @if ($Campo->obligatorio==1) required="" @endif value="{!! old('nombre_campo_'.$Campo->id) !!}">
                        <option selected="" value="{{$Campo->descripcion}}">{{$Campo->descripcion}}</option>
                        @foreach ($Campo->subcampos as $SubCampo)
                            <option value="{{$SubCampo->descripcion}}">{{$SubCampo->descripcion}}</option>
                        @endforeach
                    </select>
                  @endif

                  @if ($Campo->tipo=="multiselect")
                    <strong class="text-muted d-block mb-2 stro_form">{{$Campo->nombre}}</strong>
                    <select name="nombre_campo_{{$Campo->id}}" id="id_campo_{{$Campo->id}}" multiple="multiple" class="form-control" @if ($Campo->obligatorio==1) required="" @endif value="{!! old('nombre_campo_'.$Campo->id) !!}">
                      <option value="{{$Campo->descripcion}}">{{$Campo->descripcion}}</option>
                      @foreach ($Campo->subcampos as $SubCampo)
                        <option value="{{$SubCampo->descripcion}}">{{$SubCampo->descripcion}}</option>
                      @endforeach
                    </select>
                    <script>
                        $(document).ready(function() {
                            $('#id_campo_{{$Campo->id}}').multiselect({
                               nonSelectedText: '{{$Campo->descripcion}}',
                               nSelectedText: "Seleccionados",
                               allSelectedText: false,
                             });
                        });
                    </script>
                  @endif

                  @if ($Campo->tipo=="file")
                    <div class="form-group" id="file_div_{{$Campo->id}}" style="display: flex;">
                        <input type="text" class="form-control input_form_file" placeholder="{{$Campo->descripcion}}" readonly value="{!! old('file_nombre_campo-'.$Campo->id) !!}">
                        <label class="input-group-btn" style="margin-bottom: 0px">
                            <span class="btn btn-primary">
                                Subir&nbsp;Imagen <input type="file" id="file_input_{{$Campo->id}}" name="file_nombre_campo-{{$Campo->id}}" value="{!! old('file_nombre_campo-'.$Campo->id) !!}" style="display: none;" multiple @if ($Campo->obligatorio==1) required="" @endif>
                            </span>
                        </label>
                    </div>
                    <script>
                      $(document).ready(function(){
                        InscripFile('file_input_{{$Campo->id}}', 'file_div_{{$Campo->id}}');
                      });
                    </script>
                  @endif

                  @if ($Campo->tipo=="pago")
                    @php echo $Campo->codigo_pago @endphp
                  @endif

                  @if ($Campo->tipo=="texto_ayuda")
                  <div align="justify">
                    <code>{{$Campo->texto_ayuda}}</code>
                  </div>
                  @endif

                  @if ($Campo->tipo=="img_ayuda")
                  <div align="center">
                    <img src="{{ asset('public/img/crono/')."/".$Campo->img_ayuda }}" style="width: 100%;height: 100%" alt="">
                  </div>
                  @endif
                </div>
            </div>
            @endforeach
            <div class="row">
                <div class="form-group col-md-12">
                    <button type="button" onclick="calculateAge()" class="btn btn-primary btn-block">Registrarme</button>
                    <input type="submit" id="submitButton" style="display: none">
                </div>
{{--                 @if ($errors->any())
                        {{ implode('', $errors->all('<div>:message</div>')) }}
                @endif --}}
           </div>
         </form>
        </div>
      </div>
    </section>

    @if(session()->has('mensaje'))
        <script>
          swal("Listo!", "Hemos Registrado tus datos exitosamente, muchas gracias.", "success");
        </script>
    @endif

        <script src="{{ asset('/js/default.min.js') }}"></script>
        <script src="{{ asset('/js/app.js') }}"></script>
    </body>
</html>