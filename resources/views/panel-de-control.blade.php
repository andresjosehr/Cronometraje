        @include("general")

        
          <div class="main-content-container container-fluid px-4">
            <!-- Page Header -->
            <div class="page-header row no-gutters py-4">
              <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                <span class="text-uppercase page-subtitle">Pnael de Control</span>
                <h3 class="page-title">Informes breves y accesos rapidos</h3>
              </div>
            </div>
            <!-- End Page Header -->
            <!-- Small Stats Blocks -->
            <div class="row">
              <div class="col-lg col-md-6 col-sm-6 mb-4">
                <div class="stats-small stats-small--1 card card-small part_total">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Participantes totales</span>
                        <h6 class="stats-small__value count my-3">{{count($Participantes)}}</h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage">
                          <a href="DescargarInforme/1" target="_blank"><button type="button" class="mb-2 btn btn-sm btn-primary mr-1">Descargar en Excel</button></a>
                        </span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-1"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-6 col-sm-6 mb-4">
                <div class="stats-small stats-small--1 card card-small part_pre">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Participantes Pre-Inscritos</span>
                        <h6 class="stats-small__value count my-3">
                          @php $i=0; @endphp
                            @foreach ($Participantes as $Participante) 
                                @foreach ($Participante->estado_inscripcion as $Estado) 
                                    @if ($Estado->pivot->id_estado_inscripcion==1) 
                                        @php $i++; @endphp
                                    @endif
                                @endforeach
                            @endforeach
                            {{$i}}
                        </h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage">
                          <a href="DescargarInforme/2" target="_blank"><button type="button" class="mb-2 btn btn-sm btn-primary mr-1">Descargar en Excel</button></a>
                        </span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-2"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-4 col-sm-6 mb-4">
                <div class="stats-small stats-small--1 card card-small part_ins">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Participantes Inscritos</span>
                        <h6 class="stats-small__value count my-3">
                          @php $i=0; @endphp
                            @foreach ($Participantes as $Participante) 
                                @foreach ($Participante->estado_inscripcion as $Estado) 
                                    @if ($Estado->pivot->id_estado_inscripcion==2) 
                                        @php $i++; @endphp
                                    @endif
                                @endforeach
                            @endforeach
                            {{$i}}
                        </h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage">
                         <a href="DescargarInforme/3" target="_blank"><button type="button" class="mb-2 btn btn-sm btn-primary mr-1">Descargar en Excel</button></a>
                        </span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-3"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-4 col-sm-6 mb-4">
                <div class="stats-small stats-small--1 card card-small part_acre">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <div id="contenedor_status_participante"></div>
                        <span class="stats-small__label text-uppercase">Participantes acreditados</span>
                        <h6 class="stats-small__value count my-3">
                          @php $i=0; @endphp
                            @foreach ($Participantes as $Participante) 
                                @foreach ($Participante->estado_inscripcion as $Estado) 
                                    @if ($Estado->pivot->id_estado_inscripcion==3) 
                                        @php $i++; @endphp
                                    @endif
                                @endforeach
                            @endforeach
                            {{$i}}
                        </h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage">
                          <a href="DescargarInforme/4" target="_blank"><button type="button" class="mb-2 btn btn-sm btn-primary mr-1">Descargar en Excel</button></a>
                        </span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-4"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-4 col-sm-6 mb-4">
                <div class="stats-small stats-small--1 card card-small cate_total">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Categorias registrados</span>
                        <h6 class="stats-small__value count my-3">{{$CategoriasNum}}</h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage">
                          <a href="DescargarInforme/5" target="_blank"><button type="button" class="mb-2 btn btn-sm btn-primary mr-1">Descargar en Excel</button></a>
                        </span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-5"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 btn_acceso_rapido registrar_part">
                <a href="participantes/acc/1">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase"><i style="font-size: 35px;" class="material-icons">accessibility</i></span>
                        <h6 class="stats-small__value count my-3">Inscribir Participante</h6>
                      </div>
                      <div class="stats-small__data">
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-1"></canvas>
                  </div>
                </div>
                </a>
              </div>
              <div class="col-md-4 btn_acceso_rapido lista_part">
                <a href="participantes">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase"><i style="font-size: 35px;" class="material-icons">format_list_numbered</i></span>
                        <h6 class="stats-small__value count my-3">
                          Lista de Participantes
                        </h6>
                      </div>
                      <div class="stats-small__data">
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-2"></canvas>
                  </div>
                </div>
              </a>
              </div>
              <div class="col-md-4 btn_acceso_rapido registrar_event">
                <a href="@if (session()->get("rol")!=3) eventos/acc/2 @else formularios @endif">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase"><i style="font-size: 35px;" class="material-icons">event</i></span>
                        <h6 class="stats-small__value count my-3">
                          @if (session()->get("rol")!=3) Registrar Evento @else Lista de formularios @endif
                        </h6>
                      </div>
                      <div class="stats-small__data">
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-2"></canvas>
                  </div>
                </div>
              </a>
              </div>
            </div>
            <!-- End Small Stats Blocks -->
            <div class="row">
              <!-- Users Stats -->
              <div class="col-md-12">
                <div class="card card-small">
                  <div class="card-header border-bottom">
                    <h6 class="m-0">Lista de Participantes</h6>
                  </div>
                  <div class="card-body pt-0" >
                    <div class="row border-bottom py-2 bg-light" style="padding-left: 20px;padding-right: 20px;">
                      <div class="row" style="margin-top: 20px; width: 100%">
                          <div class="form-group col-md-12">
                            @if($Eventos!="[]")
                            <label for="feInputState">Selecciona el evento sobre el cual deseas mostrar los participantes</label>
                            <select id="feInputState" class="form-control">
                              @php $i=0; @endphp
                              @foreach ($Eventos as $Evento)
                                <option @if (count($Eventos)-1==$i) selected="selected" @endif value="{{$Evento->id}}">{{$Evento->nombre_evento}}</option>
                                @php $i++; @endphp
                              @endforeach
                            </select>
                            <div align="center" style="margin-top: 30px">
                              <div class="loading upd_participante_loading act_list" style="display: block;"></div>
                            </div> 
                              @else
                                <div class="error no_form">
                                 <div class="error__content">
                                   <h3>Aun no existe ningun participante registrado</h3>
                                   <p>Puedes registrar un usuario manualmente o puedes crear un formulario de registro para los participantes</p>
                                   <a href="participantes/acc/1" class="btn btn-accent btn-pill">Inscribir Participante</a>
                                 </div> <!-- / .error_content -->
                               </div>
                              @endif
                          </div>
                        </div>
                      <div id="ParticipantesLista" style="width: 100%;">
                      </div>        
                    </div>
              </div>
            </div>
              <!-- End Users Stats -->

            </div>
          </div>
          <footer class="main-footer d-flex p-2 px-3 bg-white border-top">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>
            </ul>
            <span class="copyright ml-auto my-auto mr-2">Copyright © 2018
              <a href="https://designrevision.com" rel="nofollow">DesignRevision</a>
            </span>
          </footer>
        </main>
      </div>
    </div>
    <div class="promo-popup animated">
      <a href="http://bit.ly/shards-dashboard-pro" class="pp-cta extra-action">
        <img src="https://dgc2qnsehk7ta.cloudfront.net/uploads/sd-blog-promo-2.jpg"> </a>
      <div class="pp-intro-bar"> Need More Templates?
        <span class="close">
          <i class="material-icons">close</i>
        </span>
        <span class="up">
          <i class="material-icons">keyboard_arrow_up</i>
        </span>
      </div>
      <div class="pp-inner-content">
        <h2>Shards Dashboard Pro</h2>
        <p>A premium & modern Bootstrap 4 admin dashboard template pack.</p>
        <a class="pp-cta extra-action" href="http://bit.ly/shards-dashboard-pro">Download</a>
      </div>
    </div>
    <script>
      $(document).ready(function() {

        $(".registrar_part").click(function(){
          window.location="participantes";
        })

        $(".lista_part").click(function(){
          window.location="participantes";
        })

        $(".registrar_event").click(function(){
          window.location="participantes";
        })

      });
    </script>
    <style>

      .btn_acceso_rapido{
        cursor: pointer;
        margin-bottom: 20px;
      }

      .btn_acceso_rapido:hover .card-small {
        box-shadow: 0 4px 0 rgba(90, 97, 105, 0.3),
                    0 6px 8px rgba(90, 97, 105, 0.22),
                    0 12px 10px rgba(90, 97, 105, 0.16),
                    0 10px 70px rgba(90, 97, 105, 0.3);

        -webkit-transition: box-shadow .3s; 
        -moz-transition: box-shadow .3s; 
        -o-transition: box-shadow .3s;
        transition: box-shadow .3s;
      }

      .btn_acceso_rapido:hover .stats-small {
        min-height: 9.7rem;
        -webkit-transition: min-height .3s; 
        -moz-transition: min-height .3s; 
        -o-transition: min-height .3s;
        transition: min-height .3s;
      }


      .btn_acceso_rapido .card-small {
        box-shadow: 0 2px 0 rgba(90, 97, 105, 0.11),
                    0 4px 8px rgba(90, 97, 105, 0.12),
                    0 10px 10px rgba(90, 97, 105, 0.06),
                    0 7px 70px rgba(90, 97, 105, 0.1);

        -webkit-transition: box-shadow .3s; 
        -moz-transition: box-shadow .3s; 
        -o-transition: box-shadow .3s;
        transition: box-shadow .3s;
      }

      .btn_acceso_rapido .stats-small {
        min-height: 8.7rem;
        -webkit-transition: min-height .3s; 
        -moz-transition: min-height .3s; 
        -o-transition: min-height .3s;
        transition: min-height .3s;
      }
      .part_total{
        background: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100pt" height="100pt" viewBox="0 0 100 100" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(9, 0, 183, .2);fill-opacity:1;" d="M 85.417969 25 C 74.542969 27.917969 61.792969 29.167969 50 29.167969 C 38.207031 29.167969 25.457031 27.917969 14.582031 25 L 12.5 33.332031 C 20.25 35.417969 29.167969 36.792969 37.5 37.5 L 37.5 91.667969 L 45.832031 91.667969 L 45.832031 66.667969 L 54.167969 66.667969 L 54.167969 91.667969 L 62.5 91.667969 L 62.5 37.5 C 70.832031 36.792969 79.75 35.417969 87.5 33.332031 Z M 50 25 C 54.582031 25 58.332031 21.25 58.332031 16.667969 C 58.332031 12.082031 54.582031 8.332031 50 8.332031 C 45.417969 8.332031 41.667969 12.082031 41.667969 16.667969 C 41.667969 21.25 45.417969 25 50 25 Z M 50 25 "/></g></svg>'), no-repeat;
        background-repeat: no-repeat;
        background-position: center;
      }
      .part_pre{
        background: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100pt" height="100pt" viewBox="0 0 100 100" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%, .2);fill-opacity:1;" d="M 85.417969 25 C 74.542969 27.917969 61.792969 29.167969 50 29.167969 C 38.207031 29.167969 25.457031 27.917969 14.582031 25 L 12.5 33.332031 C 20.25 35.417969 29.167969 36.792969 37.5 37.5 L 37.5 91.667969 L 45.832031 91.667969 L 45.832031 66.667969 L 54.167969 66.667969 L 54.167969 91.667969 L 62.5 91.667969 L 62.5 37.5 C 70.832031 36.792969 79.75 35.417969 87.5 33.332031 Z M 50 25 C 54.582031 25 58.332031 21.25 58.332031 16.667969 C 58.332031 12.082031 54.582031 8.332031 50 8.332031 C 45.417969 8.332031 41.667969 12.082031 41.667969 16.667969 C 41.667969 21.25 45.417969 25 50 25 Z M 50 25 "/></g></svg>'), no-repeat;
        background-repeat: no-repeat;
        background-position: center;
      }
      .part_ins{
        background: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100pt" height="100pt" viewBox="0 0 100 100" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(149, 160, 0, .2);fill-opacity:1;" d="M 85.417969 25 C 74.542969 27.917969 61.792969 29.167969 50 29.167969 C 38.207031 29.167969 25.457031 27.917969 14.582031 25 L 12.5 33.332031 C 20.25 35.417969 29.167969 36.792969 37.5 37.5 L 37.5 91.667969 L 45.832031 91.667969 L 45.832031 66.667969 L 54.167969 66.667969 L 54.167969 91.667969 L 62.5 91.667969 L 62.5 37.5 C 70.832031 36.792969 79.75 35.417969 87.5 33.332031 Z M 50 25 C 54.582031 25 58.332031 21.25 58.332031 16.667969 C 58.332031 12.082031 54.582031 8.332031 50 8.332031 C 45.417969 8.332031 41.667969 12.082031 41.667969 16.667969 C 41.667969 21.25 45.417969 25 50 25 Z M 50 25 "/></g></svg>'), no-repeat;
        background-repeat: no-repeat;
        background-position: center;
      }
      .part_acre{
        background: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100pt" height="100pt" viewBox="0 0 100 100" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(25, 168, 0, .2);fill-opacity:1;" d="M 85.417969 25 C 74.542969 27.917969 61.792969 29.167969 50 29.167969 C 38.207031 29.167969 25.457031 27.917969 14.582031 25 L 12.5 33.332031 C 20.25 35.417969 29.167969 36.792969 37.5 37.5 L 37.5 91.667969 L 45.832031 91.667969 L 45.832031 66.667969 L 54.167969 66.667969 L 54.167969 91.667969 L 62.5 91.667969 L 62.5 37.5 C 70.832031 36.792969 79.75 35.417969 87.5 33.332031 Z M 50 25 C 54.582031 25 58.332031 21.25 58.332031 16.667969 C 58.332031 12.082031 54.582031 8.332031 50 8.332031 C 45.417969 8.332031 41.667969 12.082031 41.667969 16.667969 C 41.667969 21.25 45.417969 25 50 25 Z M 50 25 "/></g></svg>'), no-repeat;
        background-repeat: no-repeat;
        background-position: center;
      }

      .cate_total{
        background: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100pt" height="100pt" viewBox="0 0 100 100" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(9, 0, 183, .2);fill-opacity:1;" d="M 50 8.332031 L 27.082031 45.832031 L 72.917969 45.832031 Z M 50 8.332031 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(9, 0, 183, .2);fill-opacity:1;" d="M 91.667969 72.917969 C 91.667969 83.273438 83.273438 91.667969 72.917969 91.667969 C 62.5625 91.667969 54.167969 83.273438 54.167969 72.917969 C 54.167969 62.5625 62.5625 54.167969 72.917969 54.167969 C 83.273438 54.167969 91.667969 62.5625 91.667969 72.917969 Z M 91.667969 72.917969 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(9, 0, 183, .2);fill-opacity:1;" d="M 12.5 56.25 L 45.832031 56.25 L 45.832031 89.582031 L 12.5 89.582031 Z M 12.5 56.25 "/></g></svg>'), no-repeat;
        background-repeat: no-repeat;
        background-position: center;
      }


    </style>
    @if($Eventos!="[]")
    <script>
      $(document).ready(function(){
        $("#ParticipantesLista").load(url+"/participantes/panel_lista_part", {Data: "Data"});

        $("#feInputState").change(function () {
          $(".act_list").show("slow");
            $("#ParticipantesLista").hide("slow", function(){
              $("#ParticipantesLista").empty();
              $("#ParticipantesLista").load(url+"/participantes/updateList", {id: $("#feInputState").val() });
            })
          });
        $("#feInputState option:last").attr("checked");
        $("#feInputState option:last").attr("selected");
        $(".act_list").hide("slow")
      })
    </script>
    @endif
    
    @include("participantes.editar");
    @include("footer");