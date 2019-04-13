
<div class="col-sm-12 col-md-12 crear_categoria" style="padding-top: 25px">
  <strong class="text-muted d-block mb-2">Agregar Evento</strong>
  <div id="#contenedor_crearPart"></div>
    <div class="form-row">
      <div class="form-group col-md-12">
        <strong class="text-muted d-block mb-2">Nombre</strong>
        <input type="text" class="form-control" id="nombre_categoria" placeholder="Escibe el nombre del evento" required="" value="Nombre Evento">
      </div>
      <div class="form-group col-md-12">
        <strong class="text-muted d-block mb-2">Sexo</strong>
        <select class="form-control" id="sexo">
            <option value="0" selected="">Masculino</option>
            <option value="0" selected="">Femenino</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-12">
        <strong class="text-muted d-block mb-2">Edad Minima</strong>
        <input type="text" class="form-control" id="edad_minima" placeholder="Ecoge la fecha del evento" required="" value="9">
      </div>
      <div class="form-group col-md-12">
        <strong class="text-muted d-block mb-2">Edad Maxima</strong>
        <input type="text" class="form-control" id="edad_maxima" placeholder="Escribe la localidad del evento" required="" value="19">
      </div>
    </div>
    <div class="form-group">
      <button type="button" onclick="crearCategoria()" class="mb-2 btn btn-primary mr-2 btn-block crear_part_btn">Guardar</button>
      <div align="center">
      <div class="loading upd_participante_loading crear_eve_lo"></div>
      </div>
  </div>
</div>
