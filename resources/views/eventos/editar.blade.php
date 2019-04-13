<!-- Large modal -->
<button style="display: none;" type="button" class="btn btn-primary editar_modal" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

<div class="modal fade bd-example-modal-lg edt_modal" style="z-index: 9999;" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="row vdivide edit_evento">
        <div class="col-sm-12 col-md-12" id="edit_path">
          <strong class="text-muted d-block mb-2">Datos Predefinidos</strong>
          	<input type="text" type="hidden" id="id">
          	<div class="form-row">
              <div class="form-group col-md-12">
                <strong class="text-muted d-block mb-2">Nombre</strong>
                <input type="text" class="form-control" id="nombre_evento" name="nombre_participante" placeholder="First name" value="Catalin" required="">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Email</strong>
                <input type="text" class="form-control" id="email_evento" name="nombre_participante" placeholder="First name" value="catalin@gmail.com" required="">
              </div>
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Fecha</strong>
                <input type="text" class="form-control" id="fecha" name="apellido" placeholder="Last name" value="Vasile" required="">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Localidad</strong>
                <input type="text" class="form-control" id="localidad" name="email_participante" placeholder="First name" value="Catalin" required="">
              </div>
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Tipo</strong>
                <select class="form-control" id="tipo" name="sexo">
                  <option value="1">Basico</option>
                  <option value="2">Premium</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Estado Pago</strong>
                <input type="text" class="input-sm form-control" name="nacimiento" placeholder="nacimiento" id="estado_pago">
              </div>
              <div class="form-group col-md-6">
              	<strong class="text-muted d-block mb-2">Precio</strong>
                <input type="text" class="input-sm form-control" name="nacimiento" placeholder="nacimiento" id="precio">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Categoria asociada</strong>
                <select class="form-control" id="id_categoria">
                  @foreach ($Categorias as $Categoria)
                    <option value="{{$Categoria->id}}">{{$Categoria->nombre_categoria}}</option>
                  @endforeach
                </select>
              </div>
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Inscripcion</strong>
                <select class="form-control" id="inscripcion_habilitada" name="id_estado_inscripcion">
                  <option value="0">Cerrada</option>
                  <option value="1">Abierta</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Auto-email</strong>
                <select class="form-control" id="auto_email" name="id_categoria">
				  <option value="0">No</option>
                  <option value="1">Si</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Auto-numeracion</strong>
                <select class="form-control" id="auto_numeracion" name="id_estado_inscripcion">
                  <option value="0">No</option>
                  <option value="1">Si</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Mensaje de correo de Inscripcion</strong>
                <textarea name="" id="mensaje_inscripcion" cols="30" rows="10" class="form-control"></textarea>
              </div>
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Mensaje de correo de Aprobación de pago</strong>
                <textarea name="" id="mensaje_aprobacion_pago" cols="30" rows="10" class="form-control"></textarea>
              </div>
            </div>
        </div>
      </div>
      <div class="btn_update_participantes">
        <button type="button" class="mb-2 btn btn-block btn-primary upd_participante_btn" onclick="actualizarEvento()">Guardar cambios</button>
        <div class="load_pad">
        <div class="loading upd_participante_loading"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  #custom_form{
    max-height: 338px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 14px;
  }
</style>