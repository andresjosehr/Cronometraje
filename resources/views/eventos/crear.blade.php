@if (count($Categorias)>0)
<div class="col-sm-12 col-md-12 crear_evento" style="padding-top: 25px">
  <strong class="text-muted d-block mb-2">Agregar Evento</strong>
  <div id="#contenedor_crearPart"></div>
    <div class="form-row">
      <div class="form-group col-md-12">
        <strong class="text-muted d-block mb-2">Nombre</strong>
        <input type="text" class="form-control" id="nombre_evento" placeholder="Escibe el nombre del evento" required="">
      </div>
      <div class="form-group col-md-12">
        <strong class="text-muted d-block mb-2">Email</strong>
        <input type="text" class="form-control" id="email_evento" placeholder="Escribe el email del evento" required="">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-12">
        <strong class="text-muted d-block mb-2">Fecha</strong>
        <input type="text" class="form-control" id="fecha" placeholder="Ecoge la fecha del evento" required="">
      </div>
      <div class="form-group col-md-12">
        <strong class="text-muted d-block mb-2">Localidad</strong>
        <input type="text" class="form-control" id="localidad" placeholder="Escribe la localidad del evento" required="">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-12">
        <strong class="text-muted d-block mb-2">Tipo de evento</strong>
        <select class="form-control" id="tipo">
          <option value="1" selected="">Basico</option>
          <option value="2">Premium</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-12">
        <strong class="text-muted d-block mb-2">Estado de Pago</strong>
        <input type="text" class="form-control" id="estado_pago" placeholder="Ecoge el estado de pago" required="" >
      </div>
      <div class="form-group col-md-12">
        <strong class="text-muted d-block mb-2">Precio</strong>
        <input type="text" class="form-control" id="precio" placeholder="Escribe el precio del evento" required="">
      </div>
      <div class="form-group col-md-12">
        <strong class="text-muted d-block mb-2">Categoria asociada</strong>
        <select class="form-control" id="id_categoria">
          @foreach ($Categorias as $Categoria)
            <option value="{{$Categoria->id}}" selected="">{{$Categoria->nombre_categoria}}</option>
          @endforeach
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
    <div class="form-row" style="margin-top: 20px;margin-bottom: 20px;">
      <div class="form-group col-md-4">
        <div class="custom-control custom-toggle custom-toggle-sm mb-1">
          <input type="checkbox" id="inscripcion_habilitada" name="inscripcion_habilitada" class="custom-control-input">
          <label class="custom-control-label" for="inscripcion_habilitada">Habilitar Inscripcion</label>
        </div>
      </div>
      <div class="form-group col-md-4">
        <div class="custom-control custom-toggle custom-toggle-sm mb-1">
           <input type="checkbox" id="auto_email" name="auto_email" class="custom-control-input">
           <label class="custom-control-label" for="auto_email">Auto-email</label>
        </div>
      </div>
      <div class="form-group col-md-4">
       <div class="custom-control custom-toggle custom-toggle-sm mb-1">
         <input type="checkbox" id="auto_numeracion" name="auto_numeracion" class="custom-control-input">
         <label class="custom-control-label" for="auto_numeracion">Auto-numeracion</label>
       </div>
      </div>
    </div>
    <div class="form-group">
      <button type="button" onclick="crearEvento()" class="mb-2 btn btn-primary mr-2 btn-block crear_part_btn">Guardar</button>
      <div align="center">
      <div class="loading upd_participante_loading crear_eve_lo"></div>
      </div>
  </div>
</div>
@else
<div class="error no_form" style="margin-top: 20px">
  <div class="error__content">
    <h3>Aun no puedes registrar un evento</h3>
    <p>Antes de registrar un evento, debes tener al menos una categoria creada para asociar el evento a una categoria</p>
    <a href="categorias" class="btn btn-accent btn-pill">Crear Categoria</a>
  </div> <!-- / .error_content -->
</div>
@endif
