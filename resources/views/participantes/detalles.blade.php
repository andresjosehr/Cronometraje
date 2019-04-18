<!-- Large modal -->
<button style="display: none" type="button" class="btn btn-primary editar_modal2" data-toggle="modal" data-target=".bd-example-modal-lg2">Large modal</button>

<div style="z-index: 999999;" class="modal fade bd-example-modal-lg2 edt_modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" style="width: 44%;">
    <div class="modal-content">
      <div class="row vdivide edit_sub">
        <div id="contenedor_editar_participante"></div>
        <div class="card-body p-0 pb-3 text-center">
                    <table class="table mb-0">
                      <tbody style="text-align: left;">
                        <tr>
                          <td>Nombre</td>
                          <td id="lista_nombre"></td>
                        </tr>
                        <tr>
                          <td>Apellido</td>
                          <td id="lista_apellido"></td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td id="lista_email"></td>
                        </tr>
                        <tr>
                          <td>DNI</td>
                          <td id="lista_dni"></td>
                        </tr>
                        <tr>
                          <td>Nacimiento</td>
                          <td id="lista_nacimiento"></td>
                        </tr>
                        <tr>
                          <td>Sexo</td>
                          <td id="lista_sexo"></td>
                        </tr>
                        <tr>
                          <td>Categoria</td>
                          <td id="lista_categoria"></td>
                        </tr>
                        <tr>
                          <td>Estado de Inscripcion</td>
                          <td id="lista_inscripcion"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <input type="hidden" id="list_id">
      </div>
      <div class="btn_update_participantes">
        <button type="button" class="mb-2 btn btn-block btn-primary upd_participante_btn" onclick="AbrirEdit()">Editar Participante</button>
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