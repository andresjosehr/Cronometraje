        @include("general")

        
          <div class="main-content-container container-fluid px-4">
            <!-- Page Header -->
            <div class="page-header row no-gutters py-4">
              <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                <span class="text-uppercase page-subtitle">Resumen</span>
                <h3 class="page-title">Perfil de Usuario</h3>
                <div id="perfil_edit"></div>
              </div>
            </div>
            <!-- End Page Header -->
            <!-- Default Light Table -->
            <div class="row">
              <div class="col-lg-5">
                <div class="col-lg-12">
                  <div class="card card-small mb-4 pt-3">
                    <div class="card-header border-bottom text-center">
                      <h4 class="mb-0 nom_per">{{session()->get('nombre')}}</h4>
                      <span class="text-muted d-block mb-2">{{$Rol->nombre}}</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="card card-small mb-4 pt-3">
                    <div class="card-header border-bottom text-center">
                      <h4 class="mb-0">Cambia Contraseña</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item p-4">
                              <div class="form-row" id="campos_contra">
                              <div class="col-md-5">
                                <input type="password" class="form-control" id="pass1" placeholder="Nueva contraseña">
                              </div>
                              <div class="col-md-5">
                                <input type="password" class="form-control" id="pass2" placeholder="Repita">
                              </div>
                              <div class="col-md-1">
                              <button onclick="CambiarContraseña();" class="btn btn-accent contra_btn"><i class="fa fa-check"></i></button>
                              <div class="loading contra_loading"></div>
                            </div>
                            </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="card card-small mb-4">
                  <div class="card-header border-bottom">
                    <h6 class="m-0">Detalles de tu cuenta</h6>
                    <div id="usuario_editar"></div>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item p-3">
                      <div class="row">
                        <div class="col">
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feLastName">Nombres</label>
                                <input type="text" class="form-control" id="nombre" placeholder="Last Name" value="{{session()->get('nombre')}}">
                              </div>
                              <div class="form-group col-md-6">
                                <label for="feLastName">DNI</label>
                                <input type="text" class="form-control" id="dni" placeholder="Last Name" value="{{session()->get('dni')}}">
                              </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-12">
                                <label for="feEmailAddress">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="Email" value="{{session()->get('email')}}">
                              </div>
                            </div>
                            <div class="form-group">
                              <label for="feInputAddress">Direccion</label>
                              <input type="text" class="form-control" id="direccion" value="{{session()->get('direccion')}}">
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feInputCity">Ciudad</label>
                                <input type="text" class="form-control" id="ciudad" value="{{session()->get('ciudad')}}">
                              </div>
                              <div class="form-group col-md-4">
                                 <label for="feInputCity">Estado</label>
                                <input type="text" class="form-control" id="estado" value="{{session()->get('estado')}}">
                              </div>
                              <div class="form-group col-md-2">
                                <label for="inputZip">Postal</label>
                                <input type="text" class="form-control" id="codigo_postal" value="{{session()->get('codigo_postal')}}">
                              </div>
                            </div>
                            <div class="form-row">
                            </div>
                            <button onclick="EditarUsuario();" class="btn btn-accent edit_us_btn">Editar Cuenta</button>
                            <div class="loading perfil_loading"></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- End Default Light Table -->
          </div>
          
    @include("footer");