<!-- Large modal -->
<button style="display: none;" type="button" class="btn btn-primary editar_modal" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

<div class="modal fade bd-example-modal-lg edt_modal" style="z-index: 9999;" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="row vdivide edit_sub">
        <div id="contenedor_editar_participante"></div>
        <div class="col-sm-12 col-md-6" id="edit_path">
          <strong class="text-muted d-block mb-2">Datos Predefinidos</strong>
            <div class="form-row">
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Nombre</strong>
                <input type="text" class="form-control" id="nombre" name="nombre_participante" placeholder="First name" value="Catalin" required="">
              </div>
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Apellido</strong>
                <input type="text" class="form-control" id="apellido" name="apellido" placeholder="Last name" value="Vasile" required="">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Email</strong>
                <input type="email" class="form-control" id="email" name="email_participante" placeholder="First name" value="Catalin" required="">
              </div>
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">DNI</strong>
                <input type="text" class="form-control" id="dni" name="dni" placeholder="Last name" value="Vasile" required="">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Nacimiento</strong>
                <input type="text" class="input-sm form-control" name="nacimiento" placeholder="nacimiento" id="nacimiento">
              </div>
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Sexo</strong>
                <select class="form-control" id="sexo" name="sexo">
                  <option value="0">Masculino</option>
                  <option value="1" selected="">Femenino</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Categoria</strong>
                <select id="id_categoria" class="id_catt" multiple="multiple" class="form-control">
                  @foreach ($Categorias as $Categoria)
                    <option value="{{$Categoria->id}}" >{{$Categoria->nombre_categoria}}</option>
                  @endforeach
                </select>
              </div>
              <div class="form-group col-md-6">
                <strong class="text-muted d-block mb-2">Estado de Inscripcion</strong>
                <select class="form-control" id="id_estado_inscripcion" name="id_estado_inscripcion">
                  <option value="1">Pre-inscrito</option>
                  <option value="2">Inscrito</option>
                  <option value="3">Acreditado</option>
                  <option value="4">Anulado</option>
                </select>
              </div>
            </div>
            <input type="hidden" id="cate">
            <input type="hidden" id="id_part">
            <input type="hidden" id="iden">

            <div class="form-group col-md-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Evento</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Evento 1</td>
                    <td>Acreditado</td>
                    <td>
                      <button onclick="chan('', '2', 'inscrito')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2 btn_inscrito_{{-- {{$Participante->id}} @if ($Participante->categorias->pivot->estado_inscripcion>=2 && $Participante->categorias->pivot->estado_inscripcion!=4) pul @endif --}}"><i style="font-size: 25px" class="material-icons">folder_shared</i></button>
                      <button onclick="chan('', '3', 'acreditado')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2 btn_acreditado_{{-- {{$Participante->id}} @if ($Participante->categorias->pivot->estado_inscripcion>=3 && $Participante->categorias->pivot->estado_inscripcion!=4) pul @endif --}}"><i style="font-size: 25px" class="material-icons">attach_money</i></button>
                    </td>
                </tbody>
              </table>
            </div>

        </div>
        <div class="col-sm-12 col-md-6">
          <div id="custom_form" style="display: none">

          </div>

        <div id="custom_form_default">
          <strong class="text-muted d-block mb-2">Datos de Formulario personalizado</strong>
          <div class="error" style="height: calc(42vh - 3.75rem);">
            <div class="error__content">
              <div class="loading upd_participante_loading" style="display: block;"></div>
            </div> 
          </div>
        </div>
        
        <div id="no_nada">
          <strong class="text-muted d-block mb-2">Datos de Formulario personalizado</strong>
          <div class="error" style="height: calc(42vh - 3.75rem);">
            <div class="error__content">
              <h3>No hay nada que mostrar</h3>
            </div> 
          </div>
        </div>



        </div>
      </div>
      <div class="btn_update_participantes">
        <button type="button" class="mb-2 btn btn-block btn-primary upd_participante_btn" onclick="actualizarParticipante()">Guardar cambios</button>
        <div class="load_pad">
        <div class="loading upd_participante_loading"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  $(document).ready(function(){
  $('.id_categoria').multiselect({
         nonSelectedText: "Seleccionada una o varias categorias",
         nSelectedText: "Seleccionados",
         allSelectedText: false,
       });
  })
</script>

<style>
  #custom_form{
    max-height: 338px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 14px;
  }
</style>