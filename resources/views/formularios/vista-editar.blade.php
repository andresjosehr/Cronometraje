<div id="accordion" class="editar-crear">
  @foreach ($Formularios as $Formulario)
    <div class="card" id="card_{{$Formulario->id}}">
    <div class="card-header" id="headingTwo">
      <div class="row row_res">
          <div class="col-md-8 edit_form_{{$Formulario->id}} edit_edit">
            <div class="row">
              <div class="form-group col-md-6 form_name">
                <input type="text" class="form-control  input_nom_form" id="nombre_{{$Formulario->id}}" placeholder="Nombre" value="{{$Formulario->nombre_formulario}}" required="">
              </div>
              <div class="form-group col-md-6 col_select">
                <select class="form-control evn_as" id="evento_{{$Formulario->id}}">
                  <option value="0">Evento asociado</option>
                  @foreach ($Eventos as $Evento)
                    <option value="{{$Evento->id}}" @if ($Evento->id==$Formulario->id_evento) selected=""  @endif>{{$Evento->nombre_evento}}</option>
                  @endforeach
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-6"> 
                  <div class="custom-control custom-toggle custom-toggle-sm mb-1" style="margin-top: 5px;">
                    <input id="CamposDefecto_{{$Formulario->id}}" type="checkbox" name="customToggle2" class="custom-control-input" @if ($Formulario->campos_por_defecto==1) checked="checked" @endif>
                    <label class="custom-control-label" for="CamposDefecto_{{$Formulario->id}}">Agregar campos por defecto</label>
                  </div>
              </div>
              <div class="col-md-6" id="editDivForm_{{$Formulario->id}}">
                <div class="form-group" style="display: flex;">
                    <input type="text" class="form-control" placeholder="@if ($Formulario->img) {{$Formulario->img}} @else Sube una imagen que sera vista en la seccion principal del formulario @endif" readonly>
                    <label class="input-group-btn" style="margin-bottom: 0px">
                        <span class="btn btn-primary">
                            Subir&nbsp;Imagen <input type="file" id="file_{{$Formulario->id}}" style="display: none;" multiple>
                        </span>
                    </label>
                </div>
              </div>
            </div>
          </div>


        <div class="col-md-2 vist_form_{{$Formulario->id}}" align="center">
          @if (isset($Formulario->img))
            <img src="{{ asset('public/img/crono/')."/".$Formulario->img }}" width="100" height="100" alt="">
          @else
          <p class="sin_img">Sin imagen</p>
          @endif
        </div>
        <div class="col-md-6 vist_form_{{$Formulario->id}}">
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
        <button onclick="EC_editForm('{{$Formulario->id}}')" class="btn btn-success btn-block vist_form_{{$Formulario->id}}" type="button">Editar</button>
        <button onclick="EC_VerifyStoreForm('{{$Formulario->id}}')" class="btn btn-primary btn-block edit_form_{{$Formulario->id}}" type="button" style="display: none;">Guardar Cambios</button><br>
        <button onclick="EC_deleteForm('{{$Formulario}}')" class="btn btn-danger btn-block" type="button">Borrar</button><br>
        <a target="_blank" href="{{Request::root()."/inscripcion/".$Formulario->codigo}}"><button class="btn btn-secondary btn-block ver_plantilla" type="button">Ver plantilla del formulario</button></a>
      </div>

    </div>
    <hr>
    </div>
    <div id="Formulario_{{$Formulario->id}}" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body card_res">
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
              <div class="form-group col-md-8 multi_se">
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
          @if ($Campo->tipo=="texto_ayuda")
            <div class="row row_form_vit" id="Formulario_{{$Formulario->id}}_div_{{$Campo->id}}">
              <div class="form-group col-md-8" align="justify">
                <code id="Formulario_{{$Formulario->id}}_code_{{$Campo->id}}">{{$Campo->texto_ayuda}}</code>
              </div><div class="form-group col-md-2 nopadding">
                <button onclick="EC_editField('{{$Campo}}')" id="btn_Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}" class="btn btn-success btn-block" type="button">Editar</button>
              </div>
              <div class="form-group col-md-2 nopadding">
                <button onclick="EC_deleteField('{{$Campo}}')" class="btn btn-danger btn-block" type="button">Borrar</button>
              </div>
            </div>
          @endif
          @if ($Campo->tipo=="img_ayuda")
            <div class="row row_form_vit" id="Formulario_{{$Formulario->id}}_div_{{$Campo->id}}">
              <div class="form-group col-md-8" align="justify">
                <img id="Formulario_{{$Formulario->id}}_img_{{$Campo->id}}" src="{{ asset('public/img/crono/')."/".$Campo->img_ayuda }}" style="width: 100%;height: 100%" alt="">
              </div><div class="form-group col-md-2 nopadding">
                <button onclick="EC_editField('{{$Campo}}')" id="btn_Formulario_{{$Formulario->id}}_Campo_{{$Campo->id}}" class="btn btn-success btn-block" type="button">Editar</button>
              </div>
              <div class="form-group col-md-2 nopadding">
                <button onclick="EC_deleteField('{{$Campo}}')" class="btn btn-danger btn-block" type="button">Borrar</button>
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
  <script>
    $(document).ready(function () {
      EC_initFile('file_{{$Formulario->id}}', "editDivForm_{{$Formulario->id}}")
    });
  </script>
  @endforeach
  <div id="ConverCode"></div>
</div>

  <div class="error no_form" @if ($Formularios->count()) style="display: none" @endif>
     <div class="error__content">
       <h3>No tienes ningun formulario creado!</h3>
       <p>Para crear un formulario haz click en la pestaña "Crear formulario" que se encuentra arriba </p>
       <a href="panel-de-control" class="btn btn-accent btn-pill">← Regresar al panel de control</a>
     </div> <!-- / .error_content -->
   </div>