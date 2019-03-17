        @include("general")

        
          <div class="main-content-container container-fluid px-4">
            <!-- Page Header -->
            <div class="page-header row no-gutters py-4">
              <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                <div id="registrar_admin_contenedor"></div>
                <span class="text-uppercase page-subtitle">Panel de Registro</span>
                <h3 class="page-title">Registrar administrador</h3>
              </div>
            </div>
            <!-- End Page Header -->
           
            <div class="row">
             
              <!-- New Draft Component -->
              <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                <!-- Quick Post -->
                <div class="card card-small h-100">
                  <div class="card-header border-bottom">
                    <h6 class="m-0">Formulario de Registro</h6>
                  </div>
                  <div class="card-body d-flex flex-column">
                    <form class="quick-post-form">
                      <div class="form-group">
                        <input type="email" class="form-control" id="email_admin" name="email" aria-describedby="emailHelp" placeholder="Email del administrador a registrar">
                      </div>
                      <div class="form-group from_per">
                        <select class="form-control" id="rol" name="rol">
                            <option value="0" selected=""><----- Rol del administrador ------></option>
                            @foreach ($Roles as $Rol)
                              <option value="{{$Rol->id}}">{{$Rol->nombre}}</option>
                            @endforeach
                        </select>
                      </div>
                      <div class="form-group mb-0" align="center">
                        <button type="button" onclick="registrarAdmin();" class="btn btn-accent btn-block reg_admin_btn">Registrar</button>
                        <div class="loading loading_admin"></div>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- End Quick Post -->
              </div>
              <!-- End New Draft Component -->
              <!-- Discussions Component -->
              <div class="col-lg-8 col-md-12 col-sm-12 mb-4">
                <div class="card card-small blog-comments">
                  <div class="card-header border-bottom">
                    <h6 class="m-0">Administradores pendiente por registro</h6>
                  </div>
                  <div class="card-body p-0">
                    <table class="table mb-0 reg_admin_table">
                      <thead class="bg-light">
                        <tr>
                          <th scope="col" class="border-0">email</th>
                          <th scope="col" class="border-0">rol</th>
                          <th scope="col" class="border-0">Acciones</th>
                        </tr>
                      </thead>
                      <tbody id="pre_admin_show">
                        @foreach ($AdminTemps as $AdminTemp)
                        <tr>
                          <td>{{$AdminTemp->email}}</td>
                          <td>{{$Roles[$AdminTemp->rol-1]->nombre}}</td>
                          <td>
                            <button type="button" class="mb-2 btn btn-sm btn-primary mr-1">Enviar email de nuevo</button>
                            <button type="button" class="mb-2 btn btn-sm btn-secondary mr-1">Editar</button>
                            <button type="button" class="mb-2 btn btn-sm btn-danger mr-1">Eliminar</button>
                          </td>
                        </tr>
                        @endforeach
                      </tbody>
                    </table>
                  </div>
                  <div class="card-footer border-top">
                    <div class="row">
                      <div class="col text-center view-report">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Discussions Component -->
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
          
    @include("footer");