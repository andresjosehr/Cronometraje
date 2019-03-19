
<div class="col-sm-12 col-md-12 crear_usr" style="padding-top: 25px">
  <strong class="text-muted d-block mb-2">Agregar participante</strong>
  <div id="#contenedor_crearPart"></div>
    <div class="form-row">
      <div class="form-group col-md-12">
        <input type="text" class="form-control" id="nombre_participante" placeholder="Nombres" required="">
      </div>
      <div class="form-group col-md-12">
        <input type="text" class="form-control" id="apellido" placeholder="Apellidos" required="">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-12">
        <input type="text" class="form-control" id="email_participante" placeholder="Email" required="">
      </div>
      <div class="form-group col-md-12">
        <input type="text" class="form-control" id="dni" placeholder="DNI" required="">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-12">
        <input type="text" class="form-control" id="nacimiento" placeholder="nacimiento" required="">
      </div>
    </div>
    <div class="form-group">
      <select class="form-control" id="sexo">
        <option value="null"><--- Sexo ---></option>
        <option value="0">Masculino</option>
        <option value="1">Femenino</option>
      </select>
    </div>
    <div class="form-group">
      <select class="form-control" id="id_categoria" name="id_categoria">
        <option value="0"><--- Dejar que el sistema asigne automaticamente la categoria ---></option>
        @foreach ($Categorias as $Categoria)
          <option value="{{$Categoria->id}}" >{{$Categoria->nombre_categoria}}</option>
        @endforeach
      </select>
      </select>
    </div>
    <div class="form-group">
      <select class="form-control" id="id_estado_inscripcion">
        <option value="0"><--- Estado Inscripcion ---></option>
        <option value="1">Pre-Inscrito</option>
        <option value="2">Inscrito</option>
        <option value="3">Acreditado</option>
        <option value="4">Anulado</option>
      </select>
    </div>
    <div class="form-group">
      <button type="button" onclick="crearPart()" class="mb-2 btn btn-primary mr-2 btn-block crear_part_btn">Guardar</button>
  </div>
</div>