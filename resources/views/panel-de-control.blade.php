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
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Participantes totales</span>
                        <h6 class="stats-small__value count my-3">{{count($Participantes)}}</h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage stats-small__percentage--increase">4.7%</span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-1"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-6 col-sm-6 mb-4">
                <div class="stats-small stats-small--1 card card-small">
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
                        <span class="stats-small__percentage stats-small__percentage--increase">12.4%</span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-2"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-4 col-sm-6 mb-4">
                <div class="stats-small stats-small--1 card card-small">
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
                        <span class="stats-small__percentage stats-small__percentage--decrease">3.8%</span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-3"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-4 col-sm-6 mb-4">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
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
                        <span class="stats-small__percentage stats-small__percentage--increase">12.4%</span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-4"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-4 col-sm-6 mb-4">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Eventos registrados</span>
                        <h6 class="stats-small__value count my-3">{{$Eventos}}</h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage stats-small__percentage--decrease">2.4%</span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-5"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 btn_acceso_rapido registrar_part">
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
              </div>
              <div class="col-md-4 btn_acceso_rapido lista_part">
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
              </div>
              <div class="col-md-4 btn_acceso_rapido registrar_event">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase"><i style="font-size: 35px;" class="material-icons">event</i></span>
                        <h6 class="stats-small__value count my-3">
                          Registrar Evento
                        </h6>
                      </div>
                      <div class="stats-small__data">
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-2"></canvas>
                  </div>
                </div>
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
                  <div class="card-body pt-0">
                    <div class="row border-bottom py-2 bg-light">
                            <div class="participantes_div_tab" style="width: 100%;padding: 15px;">
                              <div id="tabla_de">
                              </div>
                              <table id="participantes_table" class="display" cellspacing="0" width="100%">
                                <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>Nombre</th>
                                      <th>Apellido</th>
                                      <th>DNI</th>
                                      <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                      <th>#</th>
                                      <th>Nombre</th>
                                      <th>Apellido</th>
                                      <th>DNI</th>
                                      <th>Acciones</th>
                                     </tr>
                                </tfoot>
                                <tbody id='ListaParticipantes'>
                                  @php $i=0; @endphp
                                    @foreach ($Participantes as $Participante)
                                       <tr id="{{$Participante->id}}">
                                         <td >{{$Participante->id}}</td>
                                         {{-- <td class="inscrito_{{$Participante->estado_inscripcion->id}}" id="id_id_{{$Participante->id}}">{{$Participante->estado_inscripcion->nombre_estado_inscripcion}}</td> --}}
                                         <td>{{$Participante->nombre_participante}}</td>
                                         <td>{{$Participante->apellido}}</td>
                                         <td>{{number_format((int)$Participante->dni, 0, ',', '.' )}}</td>
                                         <td class="participantes_lista_acciones">
                                            <button onclick="editarParticipante('{{$Participante}}', '1')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-primary mr-2"><i style="font-size: 25px" class="material-icons">border_color</i></button>
                                            <button onclick="apro()" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">folder</i></button>
                                         </td>   
                                       </tr>
                                       @php $i++; @endphp
                                     @endforeach
                                </tbody>
                            </table>
                            </div>
                            <div id="example_wrapper tabla_participantes" class="dataTables_wrapper dt-bootstrap4">
                            </div>

                            @include("participantes.estado_evento")

                            <script>
                              $(document).ready(function(){
                                $('#participantes_table').DataTable();
                              });
                            </script>
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
        index();

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


    </style>
    @include("footer");