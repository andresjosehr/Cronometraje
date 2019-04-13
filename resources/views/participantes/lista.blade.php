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
                 <td class="inscrito_{{$Participante->estado_inscripcion->id}}" id="id_id_{{$Participante->id}}">{{$Participante->estado_inscripcion->nombre_estado_inscripcion}}</td>
                 <td>{{$Participante->nombre_participante}}</td>
                 <td>{{$Participante->apellido}}</td>
                 <td>{{number_format((int)$Participante->dni, 0, ',', '.' )}}</td>
                 <td class="participantes_lista_acciones">
                   <button onclick="editarParticipante('{{$Participante}}', '1')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-primary mr-2"><i style="font-size: 25px" class="material-icons">border_color</i></button>
                   <button onclick="chan('{{$Participante->id}}', '2', 'inscrito')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2 btn_inscrito_{{$Participante->id}} @if ($Participante->estado_inscripcion->id>=2 && $Participante->estado_inscripcion->id!=4) pul @endif"><i style="font-size: 25px" class="material-icons">folder_shared</i></button>
                   <button onclick="chan('{{$Participante->id}}', '3', 'acreditado')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2 btn_acreditado_{{$Participante->id}} @if ($Participante->estado_inscripcion->id>=3 && $Participante->estado_inscripcion->id!=4) pul @endif"><i style="font-size: 25px" class="material-icons">attach_money</i></button>
                   <button onclick="apro()" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">folder</i></button>
                 </td>
               </tr>
             @endforeach
        </tbody>
    </table>
    </div>

    <script>
      $(document).ready(function(){
        $('#participantes_table').DataTable();
      });
    </script>

    <div id="example_wrapper tabla_participantes" class="dataTables_wrapper dt-bootstrap4">
    </div>