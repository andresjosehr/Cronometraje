        @include("general")

        
          <div class="main-content-container container-fluid px-4">
            <!-- Page Header -->
            <div class="page-header row no-gutters py-4">
              <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                <span class="text-uppercase page-subtitle">Panel de control</span>
                <h3 class="page-title">Gestion de Participantes</h3>
              </div>
            </div>
            <!-- End Page Header -->
            <!-- Small Stats Blocks -->
            <div class="row">
              
            <div class="col-lg-12 col-md-12 col-sm-12 mb-4">
                <div class="card card-small">
                  <div class="card-header border-bottom">
                    <div id='contenedor_status_participante'></div>
                    <h6 class="m-0">Parcitipantes {{\Request::path()}}</h6>
                  </div>
                  <div class="card-body" id="participantes">
                    <div class="row ">
                      <div class="col-12 col-sm-12">
                        <ul class="nav nav-tabs praticipantes_nav" id="myTab" role="tablist">
                          <li class="nav-item participante_tab_lista">
                            <a class="nav-link tab1 active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Vista de Participantes</a>
                          </li>
                          <li class="nav-item participante_tab_crear">
                            <a onclick="limp()" class="nav-link tab2" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Agregar Participante</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="tab-content" id="myTabContent">
                      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        @if ($Participantes!=0)
                        <div class="row" style="margin-top: 20px">
                          <div class="form-group col-md-12">
                            <label for="feInputState">Selecciona el evento sobre el cual deseas mostrar los participantes</label>
                            <select id="feInputState" class="form-control">
                              @foreach ($Eventos as $Evento)
                                <option value="{{$Evento->id}}">{{$Evento->nombre_evento}}</option>
                              @endforeach
                            </select>
                          </div>
                        </div>
                        @endif
                        <div align="center">
                          <div class="loading upd_participante_loading act_list"></div>
                        </div> 
                        <div id="ParticipantesLista">
                          @include("participantes.lista")
                        </div>
                      </div>
                      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        @include("participantes.crear")
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
@if ($Participantes!=0)
      <script>

        $(document).ready(function() {

          var parts = window.location.pathname.split('/');
          var urlPath = parts.pop() || parts.pop();  // handle potential trailing slash
        if (urlPath=="1") {
          $(".tab1").removeClass("active");
          $("#home").removeClass("show");
          $("#home").removeClass("active");

          $(".tab2").addClass("active");
          $("#profile").addClass("show");
          $("#profile").addClass("active");
        }

        $("#feInputState").val("{{$Evento->id}}")

        $("#feInputState option[value={{$Evento->id}}]").attr("checked");
        $("#feInputState option[value={{$Evento->id}}]").attr("selected");

         $("#feInputState").change(function () {
          $(".act_list").show("slow");
            $("#ParticipantesLista").hide("slow", function(){
              $("#ParticipantesLista").empty();
              $("#ParticipantesLista").load(url+"/participantes/updateList", {id: $("#feInputState").val() });
            })
          });
        });
      </script>
      @include("participantes.editar");
@endif
    @include("footer");