

@if ($Participantes!="[]")
<link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet">
<script src="https://cdn.quilljs.com/1.0.0/quill.js"></script>

 <div class="participantes_div_tab">
      <div id="tabla_de">
      </div>
      <table id="participantes_table" class="display" cellspacing="0" width="100%">
        <thead>
            <tr>
              <th>#</th>
              <th>Estado</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>DNI</th>
              <th>Acciones</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
              <th>#</th>
              <th>Estado</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>DNI</th>
              <th>Acciones</th>
             </tr>
        </tfoot>
        <tbody id='ListaParticipantes'>
            @foreach ($Participantes as $Participante)
               <tr id="{{$Participante->id}}">
                 <td >{{$Participante->id}}</td>
                 <td class="inscrito_{{$Participante->id_inscripcion}}" id="id_id_{{$Participante->id}}">{{$Participante->estado_inscripcion}}</td>
                 <td>{{$Participante->nombre_participante}}</td>
                 <td>{{$Participante->apellido}}</td>
                 <td>{{number_format((int)$Participante->dni, 0, ',', '.' )}} <b style="display: none;">{{$Participante->dni}}</b></td>
                 <td class="participantes_lista_acciones">
                   <button style="display: none" title="Editar Participante" onclick="editarParticipante('{{$Participante}}', '1')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-primary mr-2 boton_editar{{$Participante->id}}"><i style="font-size: 25px" class="material-icons">border_color</i></button>
                   <button title="Editar Participante" onclick="DetallesParticipante('{{$Participante}}', '1')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-primary mr-2"><i style="font-size: 25px" class="material-icons">list</i></button>
                   <button title="Editar asignar o quitar el estado de 'inscrito' al participante" onclick="chan('{{$Participante->id}}', '2', 'inscrito', '{{$Participante->pivot->id_categoria}}')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2 btn_inscrito_{{$Participante->id}} @if ($Participante->id_inscripcion>=2 && $Participante->id_inscripcion!=4) pul @endif"><i style="font-size: 25px" class="material-icons">folder_shared</i></button>
                   <button title="Editar asignar o quitar el estado de 'acreditado' al participante" onclick="chan('{{$Participante->id}}', '3', 'acreditado', '{{$Participante->pivot->id_categoria}}')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2 btn_acreditado_{{$Participante->id}} @if ($Participante->id_inscripcion>=3 && $Participante->id_inscripcion!=4) pul @endif"><i style="font-size: 25px" class="material-icons">attach_money</i></button>
                   <button title="Editar asignar o quitar el estado de 'archivado' al participante" onclick="apro()" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">folder</i></button>
                   <button title="Enviar email al participante" onclick="enviomail('{{$Participante->email_participante}}')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">email</i></button>
                 </td>
               </tr>
             @endforeach
        </tbody>
    </table>
    </div>

    <div id="example_wrapper tabla_participantes" class="dataTables_wrapper dt-bootstrap4">
    </div>
     @else(count($Participantes)=="[]")
      <div class="error no_form" style="margin-top: 20px">
        <div class="error__content">
          <h3>No tienes participantes registrados</h3>
          <p>Puedes crear un participante en la seccion de agregar participantes del sistema</p>
        </div> <!-- / .error_content -->
      </div>
    @endif

    @include("participantes.estado_evento")
    @include("participantes.detalles")


                


    <script>
      $(document).ready(function(){
        $('#participantes_table').DataTable();
      });
    </script>