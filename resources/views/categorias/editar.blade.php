

<!-- Large modal -->
<button style="display: none;" type="button" class="btn btn-primary editar_modal" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

<div class="modal fade bd-example-modal-lg edt_modal" style="z-index: 9999;" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="row vdivide edit_categoria">
        <div class="col-sm-12 col-md-12" id="edit_path">
          <strong class="text-muted d-block mb-2">Datos Predefinidos</strong>
            <input type="text" type="hidden" id="id" style="display: none">
            <div class="form-row">
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Nombre</strong>
                <input type="text" class="form-control" id="nombre_categoria" name="nombre_participante" placeholder="First name" value="catalin@gmail.com" required="">
              </div>
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Sexo</strong>
                <select class="form-control" id="sexo" name="sexo">
                  <option value="0">Masculina</option>
                  <option value="1">Femenino</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Edad Minima</strong>
                <input type="text" class="form-control" id="edad_minima" name="edad_minima" placeholder="First name" value="Catalin" required="">
              </div>
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Edad Maxima</strong>
                <input type="text" class="form-control" id="edad_maxima" name="apellido" placeholder="Last name" value="Vasile" required="">
              </div>
            </div>
        </div>
      </div>
      <div class="btn_update_participantes">
        <button type="button" class="mb-2 btn btn-block btn-primary upd_participante_btn" onclick="actualizarCategoria()">Guardar cambios</button>
        <div class="load_pad">
        <div class="loading upd_participante_loading cate_lo"></div>
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