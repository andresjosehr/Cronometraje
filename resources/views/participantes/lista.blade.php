      <div class="participantes_div_tab">
      <div id="tabla_de">
      </div>
      <table id="participantes_table" class="display" cellspacing="0" width="100%">
        <thead>
            <tr>c
              <th>#</th>
              <th>Estado</th>
              <th>Nombres</th>
              <th>Email</th>
              <th>Categoria</th>
              <th>Acciones</th>
            </tr>
        </thead>
        <tfoot>
            <tr>c
              <th>#</th>
              <th>Estado</th>
              <th>Nombres</th>
              <th>Email</th>
              <th>Categoria</th>
              <th>Acciones</th>
             </tr>
        </tfoot>
        <tbody id='ListaParticipantes'>
            @foreach ($Participantes as $Participante)
               <tr id="{{$Participante->id_participante}}">
                 <td >{{$Participante->id_participante}}</td>
                 <td class="inscrito_{{$Participante->id_estado_inscripcion_ins}}" id="id_id_{{$Participante->id_participante}}">{{$Participante->nombre_estado_inscripcion}}</td>
                 <td>{{$Participante->nombre_participante}} {{$Participante->apellido}}</td>
                 <td>{{$Participante->email_participante}}</td>
                 <td>{{$Participante->nombre_categoria}}</td>
                 <td class="participantes_lista_acciones">
                   <button onclick="editarParticipante('{{$Participante}}', '1')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-primary mr-2"><i style="font-size: 25px" class="material-icons">border_color</i></button>
                   <button onclick="chan('{{$Participante->id_participante}}', '2', 'inscrito')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2 btn_inscrito_{{$Participante->id_participante}} @if ($Participante->id_estado_inscripcion_ins>=2 && $Participante->id_estado_inscripcion_ins!=4) pul @endif"><i style="font-size: 25px" class="material-icons">folder_shared</i></button>
                   <button onclick="chan('{{$Participante->id_participante}}', '3', 'acreditado')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2 btn_acreditado_{{$Participante->id_participante}} @if ($Participante->id_estado_inscripcion_ins>=3 && $Participante->id_estado_inscripcion_ins!=4) pul @endif"><i style="font-size: 25px" class="material-icons">attach_money</i></button>
                   <button onclick="apro()" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">folder</i></button>
                 </td>
               </tr>
             @endforeach
        </tbody>
        }
    </table>
    </div>

    <div id="example_wrapper tabla_participantes" class="dataTables_wrapper dt-bootstrap4">
    </div>