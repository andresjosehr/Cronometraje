     
     <div class="tab_head">
      
    </div>
      <div style="overflow-x: auto;" class="eventos_div_tab">
      <div id="tabla_de">
      </div>
      <table id="eventos_table" class="display" cellspacing="0" width="100%">
        <thead style="background: white;">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Email</th>
              <th>Localidad</th>
              <th>Tipo</th>
              <th>Estado pago</th>
              <th>Precio</th>
              <th>Categoria</th>
              <th>Inscripcion</th>
              <th>Auto-email</th>
              <th>Auto-numeracion</th>
              <th>Acciones</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Email</th>
              <th>Localidad</th>
              <th>Tipo</th>
              <th>Estado pago</th>
              <th>Precio</th>
              <th>Categoria</th>
              <th>Inscripcion</th>
              <th>Auto-email</th>
              <th>Auto-numeracion</th>
              <th>Acciones</th>
             </tr>
        </tfoot>
        <tbody id='ListaParticipantes'>
          @foreach ($Eventos as $Evento)
            <tr>
              <td>{{$Evento->id}}</td>
              <td>{{$Evento->nombre_evento}}</td>
              <td style="white-space: nowrap;">{{$Evento->fecha}}</td>
              <td>{{$Evento->email_evento}}</td>
              <td>{{$Evento->localidad}}</td>
              <td>@if ($Evento->tipo==1) Basico @else Premium @endif</td>
              <td>{{$Evento->estado_pago}}</td>
              <td>{{$Evento->precio}} $</td>
              <td>{{$Evento->categorias["nombre_categoria"]}}</td>
              <td>@if ($Evento->inscripcion_habilitada==1) Abierta @else Cerrada @endif</td>
              <td>@if ($Evento->auto_email==1) Si @else No @endif</td>
              <td>@if ($Evento->auto_numeracion==1) Si @else No @endif</td>
              <td style="display: flex;">
                <button onclick="editarParticipante('{{$Evento}}', '1')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-primary mr-2"><i style="font-size: 25px" class="material-icons">border_color</i></button>
                <button onclick="editarParticipante('{{$Evento}}', '1')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-danger mr-2"><i style="font-size: 25px" class="material-icons">delete</i></button>
              </td>
            </tr>
          @endforeach
        </tbody>
    </table>
    </div>
    <div class="tab_foot">
      
    </div>

    <div id="example_wrapper tabla_participantes" class="dataTables_wrapper dt-bootstrap4">
    </div>

    <style>

      #eventos_table_filter{
          text-align: right;
          float: right;
      }
      #eventos_table_paginate{
        text-align: right;
        float: right;
      }

    </style>

    <script>
      $(document).ready(function(){
        $('#eventos_table').DataTable();
        $(".dataTables_info").parent().parent().appendTo(".tab_foot")
        $(".dataTables_length").parent().parent().appendTo(".tab_head")
        $(".dataTables_info").parent().parent().css("margin-top", "20px")
        $(".dataTables_length").parent().parent().css("margin-top", "20px")
      });
    </script>