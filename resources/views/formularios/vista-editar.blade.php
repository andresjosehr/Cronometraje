<div id="accordion" class="editar-crear">
  @foreach ($Formularios as $Formulario)
    <div class="card" id="card_{{$Formulario->id}}">
    <div class="card-header" id="headingTwo">
      <div class="row">
        <div class="col-md-8">
          <h5 class="mb-0">
            <a class="nav-link btn-link aloc btn-link collapsed vist_tit_form" data-toggle="collapse" data-target="#Formulario_{{$Formulario->id}}" aria-expanded="false" aria-controls="Formulario_{{$Formulario->id}}">
              {{$Formulario->nombre_formulario}} <br>
              @foreach ($Eventos as $Evento)
                @if ($Evento->id==$Formulario->id_evento)
                  <p>{{$Evento->nombre_evento}}</p>
                @endif
              @endforeach
            </a>
          </h5>
        </div>
      <div class="form-group col-md-4 btn_edit_form">
        <button onclick="editField('0')" class="btn btn-success btn-block" type="button">Editar</button><br>
        <button onclick="EC_deleteForm('{{$Formulario}}')" class="btn btn-danger btn-block" type="button">Borrar</button>
      </div>
    </div>
    <hr>
    </div>
    <div id="Formulario_{{$Formulario->id}}" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
        @foreach ($Formulario->campos as $Campo)
          @if ($Campo->tipo=="text" || $Campo->tipo=="email" || $Campo->tipo=="date")
            @php $tipo=$Campo->tipo; @endphp
            @if ($Campo->tipo=="date") @php $tipo="text";  @endphp @endif
            <div class="row row_form_vit" id="Formulario_{{$Formulario->id}}_div_{{$Campo->id}}">
              <div class="form-group col-md-8">
                <input type="{{$tipo}}" id="Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}" class="form-control" placeholder="{{$Campo->descripcion}}">
              </div>
              <div class="form-group col-md-2 nopadding">
                <button onclick="EC_editField('{{$Campo}}')" id="btn_Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}" class="btn btn-success btn-block" type="button">Editar</button>
              </div>
              <div class="form-group col-md-2 nopadding" id="undefined">
                <button onclick="EC_deleteField('{{$Campo}}')" class="btn btn-danger btn-block" type="button">Borrar</button>
              </div>
            </div>
          @endif
          @if ($Campo->tipo=="select")
            <div class="row row_form_vit" id="Formulario_{{$Formulario->id}}_div_{{$Campo->id}}">
              <div class="form-group col-md-8">
                <select class="form-control" id="Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}">
                  <option>{{$Campo->descripcion}}</option>
                  @foreach ($Campo->subcampos as $SubCampo)
                    <option id="Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}_SubCampo_{{$SubCampo->id}}">{{$SubCampo->descripcion}}</option>
                  @endforeach
                </select>
              </div>
              <div class="form-group col-md-2 nopadding" id="undefined">
                <button onclick="EC_editField('{{$Campo}}')" id="btn_Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}" class="btn btn-success btn-block" type="button">Editar</button>
              </div>
              <div class="form-group col-md-2 nopadding" id="undefined">
                <button onclick="EC_deleteField('{{$Campo}}')" class="btn btn-danger btn-block" type="button">Borrar</button>
              </div>
            </div>
          @endif
          @if ($Campo->tipo=="multiselect")
            <div class="row row_form_vit" id="div_Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}">
              <div class="form-group col-md-8" style="margin-bottom: 0;">
                <select id="Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}" multiple="multiple" class="form-control">
                  <option>{{$Campo->descripcion}}</option>
                  @foreach ($Campo->subcampos as $SubCampo)
                    <option id="Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}_SubCampo_{{$SubCampo->id}}">{{$SubCampo->descripcion}}</option>
                  @endforeach
                </select>
              </div>
              <div class="form-group col-md-2 nopadding" id="undefined">
                <button onclick="EC_editField('{{$Campo}}')" id="btn_Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}" class="btn btn-success btn-block" type="button">Editar</button>
              </div>
              <div class="form-group col-md-2 nopadding" id="undefined">
                <button onclick="EC_deleteField('{{$Campo}}')" class="btn btn-danger btn-block" type="button">Borrar</button>
              </div>
            </div>
          @endif
           @if ($Campo->tipo=="pago")
           <script>var campo="{{$Campo}}";</script>
            <div class="row row_form_vit" id="Formulario_{{$Formulario->id}}_div_{{$Campo->id}}">
              <div class="form-group col-md-8" align="center">
                <?php echo $Campo->codigo_pago ?>
              </div><div class="form-group col-md-2 nopadding">
                <button onclick="EC_editField(JSON.stringify(campo))" id="btn_Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}" class="btn btn-success btn-block" type="button">Editar</button>
              </div>
              <div class="form-group col-md-2 nopadding">
                <button onclick="EC_deleteField(JSON.stringify(campo))" class="btn btn-danger btn-block" type="button">Borrar</button>
              </div>
            </div>
          @endif
          @if ($Campo->tipo=="file")
            <div class="row row_form_vit" id="Formulario_{{$Formulario->id}}_div_{{$Campo->id}}" multiple="multiple" class="form-control">
              <div class="form-group col-md-8 form_div_file">
                <input type="text" class="form-control input_form_file" placeholder='{{$Campo->descripcion}}' id="place_{{$Formulario->id}}_Campo_{{$Campo->id}}" readonly="">
                <label class="input-group-btn label_from_file">
                  <span class="btn btn-primary btn-block">Subir 
                    <input id='Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}' type="file" style="display: none;" multiple="">
                  </span>
                </label>
              </div>
              <div class="form-group col-md-2 nopadding">
                <button onclick="EC_editField('{{$Campo}}')" id="btn_Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}" class="btn btn-success btn-block" type="button">Editar</button>
              </div>
              <div class="form-group col-md-2 nopadding">
                <button onclick="EC_deleteField('{{$Campo}}')" class="btn btn-danger btn-block" type="button">Borrar</button>
              </div>
            </div>
          @endif
          @if ($Campo->tipo=="date")
            <script>
              $(document).ready(function () {
                  DateVist('Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}')
                });
              </script>
          @endif
          @if ($Campo->tipo=="multiselect")
            <script>
              $(document).ready(function () {
                  MultiSelectVist('Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}', '{{$Campo->descripcion}}')
                });
              </script>
          @endif
          @if ($Campo->tipo=="file")
            <script>
              $(document).ready(function () {
                  FileVist('Formulario_{{$Formulario->id}}_div_{{$Campo->id}}', 'Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}')
                });
              </script>
          @endif
        @endforeach
      </div>
    </div>
  </div>
  @endforeach
  <div id="ConverCode" style="display: none"></div>
</div>

@if ($Formulario=="")
  <div class="error" style="height: calc(32vh - 3.75rem);">
     <div class="error__content">
       <h3>No tienes ningun formulario creado!</h3>
       <p>Para crear un formulario haz click en la pestaña "Crear formulario" que se encuentra arriba </p>
       <a href="panel-de-control" class="btn btn-accent btn-pill" style="margin-top: 10px;">← Regresar al panel de control</a>
     </div> <!-- / .error_content -->
   </div>
@endif

