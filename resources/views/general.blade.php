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
    
</script>


    <script>
      var url = '{{Request::root()}}';
      $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    </script>
  </head>
  <body class="h-100">

    <div class="container-fluid">
      <div class="row">
        <!-- Main Sidebar -->
        <aside class="main-sidebar col-12 col-md-3 col-lg-2 px-0">
          <div class="main-navbar">
            <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
              <a class="navbar-brand w-100 mr-0" href="#" style="line-height: 25px;">
                <div class="d-table m-auto">
                  <img id="main-logo" class="d-inline-block align-top mr-1" style="max-width: 25px;" src="{{asset('public/img/shards-dashboards-logo.svg')}}" alt="Shards Dashboard">
                  <span class="d-none d-md-inline ml-1">Cronometraje</span>
                </div>
              </a>
              <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                <i class="material-icons">&#xE5C4;</i>
              </a>
            </nav>
          </div>
          <form action="#" class="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
            <div class="input-group input-group-seamless ml-3">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fas fa-search"></i>
                </div>
              </div>
              <input class="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search"> </div>
          </form>
          <div class="nav-wrapper">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link sidebar_panel" href="panel-de-control">
                  <i class="material-icons">edit</i>
                  <span>Escritorio</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link sidebar_perfil " href="perfil">
                  <i class="material-icons">person</i>
                  <span>Perfil de Usuario</span>
                </a>
              </li>
              @if (session()->get("rol")!=3)
                <li class="nav-item">
                  <a class="nav-link sidebar_registrar_admin" href="registrar-admin">
                    <i class="material-icons">person_add</i>
                    <span>Administrador de usuarios</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link sidebar_eventos" href="eventos">
                    <i class="material-icons">event</i>
                    <span>Eventos</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link sidebar_categorias" href="categorias">
                    <i class="material-icons">category</i>
                    <span>Categorias</span>
                  </a>
                </li>
              @endif
              <li class="nav-item">
                <a class="nav-link sidebar_formularios" href="formularios">
                  <i class="material-icons">format_list_numbered</i>
                  <span>Formularios</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link sidebar_participantes" href="participantes">
                  <i class="material-icons">accessibility</i>
                  <span>Participantes</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link sidebar_informes" href="informes">
                  <i class="material-icons">folder_open</i>
                  <span>Informes</span>
                </a>
              </li>
              <li class="nav-item" id="sidebar_eventos">
                <a class="nav-link sidebar_eventos" href="eventos" style="text-align: center;">
                  <i class="material-icons"></i>
                  <p>Eventos</p>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <!-- End Main Sidebar -->

        <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
          <div class="main-navbar sticky-top bg-white">
            <!-- Main Navbar -->
            <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
              <form action="#" class="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
                <div class="input-group input-group-seamless ml-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      {{-- <i class="fas fa-search"></i> --}}
                    </div>
                  </div>
                  <input class="navbar-search form-control" type="text" aria-label="Search"> </div>
              </form>
              <ul class="navbar-nav border-left flex-row ">
                <li class="nav-item border-right dropdown notifications" style="display: none;">
                  <a class="nav-link nav-link-icon text-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div class="nav-link-icon__wrapper">
                      <i class="material-icons">&#xE7F4;</i>
                      <span class="badge badge-pill badge-danger">2</span>
                    </div>
                  </a>
                  <div class="dropdown-menu dropdown-menu-small" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">
                      <div class="notification__icon-wrapper">
                        <div class="notification__icon">
                          <i class="material-icons">&#xE6E1;</i>
                        </div>
                      </div>
                      <div class="notification__content">
                        <span class="notification__category">Analytics</span>
                        <p>Your website’s active users count increased by
                          <span class="text-success text-semibold">28%</span> in the last week. Great job!</p>
                      </div>
                    </a>
                    <a class="dropdown-item" href="#">
                      <div class="notification__icon-wrapper">
                        <div class="notification__icon">
                          <i class="material-icons">&#xE8D1;</i>
                        </div>
                      </div>
                      <div class="notification__content">
                        <span class="notification__category">Sales</span>
                        <p>Last week your store’s sales count decreased by
                          <span class="text-danger text-semibold">5.52%</span>. It could have been worse!</p>
                      </div>
                    </a>
                    <a class="dropdown-item notification__all text-center" href="#"> View all Notifications </a>
                  </div>
                </li>
                <li class="nav-item dropdown custom_dropdown">
                  <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    {{-- <img class="user-avatar rounded-circle mr-2" src="{{asset('img/avatars/0.jpg')}}" alt="User Avatar"> --}}
                    <span class="d-none d-md-inline-block">{{session()->get("nombre")}}</span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-small">
                    <a class="dropdown-item" href="perfil">
                      <i class="material-icons">&#xE7FD;</i> Perfil</a>
                    <!-- <a class="dropdown-item" href="components-blog-posts.html">
                      <i class="material-icons">vertical_split</i> Blog Posts</a>
                    <a class="dropdown-item" href="add-new-post.html">
                      <i class="material-icons">note_add</i> Add New Post</a>
                    <div class="dropdown-divider"></div> -->
                    <a class="dropdown-item text-danger" href="CerrarSesion">
                      <i class="material-icons text-danger">&#xE879;</i> Cerrar Sesion </a>
                  </div>
                </li>
              </ul>
              <nav class="nav">
                <a href="#" class="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left" data-toggle="collapse" data-target=".header-navbar" aria-expanded="false" aria-controls="header-navbar">
                  <i class="material-icons">&#xE5D2;</i>
                </a>
              </nav>
            </nav>
          </div>
          <style>
            .evento_generado{
              display: none
            }
          </style>
  <script>
          $(document).ready(function(){
              $.ajax({
                  type: 'post',
                  url: url+"/general",
                  success: function(result){
                   result.map(function(key, value){

                    $("#sidebar_eventos").after().append('<li class="nav-item evento_generado">'+
                                                            '<a class="nav-link sidebar_eventos" href="eventos">'+
                                                              '<i class="material-icons">event</i>'+
                                                              '<span>'+key.nombre_evento+'</span><br>'+
                                                              '<p style="font-size:10px">Categoria: '+key.categorias.nombre_categoria+'</p>'+
                                                              '<p style="font-size:10px">Participantes: '+key.categorias.participantes.length+'</p>'+
                                                            '</a>'+
                                                          '</li>')
                    console.log(key)
                    console.log(value)
                   })
                   $(".evento_generado").show("slow");                  }
              });
          });
  </script>
          <!-- / .main-navbar -->