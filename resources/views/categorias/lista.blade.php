     @if (count($Categorias)>0)
     <div class="tab_head">
      
    </div>
      <div class="eventos_div_tab">
      <div id="tabla_de">
      </div>
      <table id="categorias_table" class="display" cellspacing="0" width="100%">
        <thead style="background: white;">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Edad Minima</th>
              <th>Edad Maxima</th>
              <th>Sexo</th>
              <th>Acciones</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Edad Minima</th>
              <th>Edad Maxima</th>
              <th>Sexo</th>
              <th>Acciones</th>
             </tr>
        </tfoot>
        <tbody id='ListaParticipantes'>
          @foreach ($Categorias as $Categoria)
            <tr id="info_cat_{{$Categoria->id}}">
              <td>{{$Categoria->id}}</td>
              <td>{{$Categoria->nombre_categoria}}</td>
              <td>{{$Categoria->edad_minima}}</td>
              <td>{{$Categoria->edad_maxima}}</td>
              <td>@if ($Categoria->sexo==1) Femenino @else Masculino @endif</td>
              <td style="display: flex;" id="btn_eve">
                <button onclick="editarCategoria('{{$Categoria}}')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-primary mr-2"><i style="font-size: 25px" class="material-icons">border_color</i></button>
                <button onclick="eliminarCategoria('{{$Categoria->id}}')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-danger mr-2"><i style="font-size: 25px" class="material-icons">delete</i></button>
              </td>
            </tr>
          @endforeach
        </tbody>
    </table>
    </div>
    <div class="tab_foot">
    </div>
    @include("categorias.editar")

    <div id="example_wrapper tabla_participantes" class="dataTables_wrapper dt-bootstrap4">
    </div>

    @else
<div class="error no_form" style="margin-top: 20px">
  <div class="error__content">
    <h3>No tienes categorias registradas</h3>
    <p>Puedes crear una categoria haciendo click en "Agregar Categorias" en la pestaña de arriba</p>
  </div> <!-- / .error_content -->
</div>
@endif

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
        $('#categorias_table').DataTable();
      });
    </script>