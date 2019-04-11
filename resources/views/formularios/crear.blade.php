
<div class="crear_form">

	<div class="form-row">
      <div class="form-group col-md-4">
        <input type="text" class="form-control" id="nombre" placeholder="Nombre" value="Formulario 1" required="">
      </div>
      <div class="form-group col-md-4">
        <select class="form-control" id="evento">
        	<option value="0">Evento asociado</option>
        	@foreach ($Eventos as $Evento)
        		<option value="{{$Evento->id}}">{{$Evento->nombre_evento}}</option>
        	@endforeach
        </select>
      </div>
      <div class="col-md-4">
      	<div class="row form_create_options">
	      	<div class="form-group col">
		        <button id='btn_create_create_form'	onclick="createForm()" class="btn btn-primary btn-block" type="button">Crear Formulario</button>
		        <button id='btn_create_form' class="btn btn-primary btn-block" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
			    Crear Formulario
			  </button>
	      	</div>
	      </div>
      </div>
      <div class="col-4">	
        	<div class="custom-control custom-toggle custom-toggle-sm mb-1" style="margin-top: 5px;">
        	  <input id="CamposDefecto" type="checkbox" name="customToggle2" class="custom-control-input" checked="checked">
        	  <label class="custom-control-label" for="CamposDefecto">Agregar campos por defecto</label>
        	</div>
      </div>
      <div class="col-8">
            <div class="form-group" style="display: flex;">
                <input type="text" class="form-control" id="des_img" placeholder="Sube una imagen que sera vista en la seccion principal del formulario" readonly>
                <label class="input-group-btn" style="margin-bottom: 0px">
                    <span class="btn btn-primary">
                        Subir&nbsp;Imagen <input type="file" id="img_form" style="display: none;" multiple>
                    </span>
                </label>
            </div>
        </div>
    </div>
	<div class="collapse" id="collapseExample">
	  <div class="card card-body crear_form_card-body">
	  	<div class="page-header row no-gutters py-4">
          <div class="col-12 col-sm-4 text-center text-sm-left mb-0 nom_create_form">
            <h3 class="page-title"></h3>
            <span class="text-uppercase page-subtitle"></span>
          </div>
        </div>
        <div class="form-row" id="fields">
        </div>
        <div id="div_base"></div> 
        </div>
		<div onclick="scrollbotton()" class="tool_tooltip btn btn-secondary btn_block">Agregar Campo
		  <div class="tool_tooltiptext">
		  	<h3 class="tootltip_title">Tipo de campo</h3>

		  	<div class="row row_options">
		  		<div onclick="createField('text')" class="col">
		  			<i class=" material_create material-icons">
						chat_bubble
					</i>
					<p class="form_option">Texto<p>
		  		</div>
		  		<div onclick="createField('email')" class="col">
		  			<i class=" material_create material-icons">
						email
					</i>
					<p class="form_option">Email<p>
		  		</div>
		  		<div onclick="createField('date')" class="col">
		  			<i class=" material_create material-icons">
						date_range
					</i>
					<p class="form_option">Fecha<p>
		  		</div>
		  		<div onclick="createField('select')" class="col">
		  			<i class=" material_create material-icons">
						done
					</i>
					<p class="form_option">Select<p>
		  		</div>
		  		<div onclick="createField('multiselect')" class="col">
		  			<i class=" material_create material-icons">
						done_all
					</i>
					<p class="form_option">MultiSelect<p>
		  		</div>
		  		<div onclick="createField('file')" class="col">
		  			<i class=" material_create material-icons">
						attach_file
					</i>
					<p class="form_option">Archivo<p>
		  		</div>
		  		<div onclick="createField('pago')" class="col">
		  			<i class=" material_create material-icons">
						credit_card
					</i>
					<p class="form_option">Pago<p>
		  		</div>
		  	</div>
		  	<div class="row row_options">
		  		<div onclick="createField('texto_ayuda')" class="col">
		  			<i class=" material_create material-icons">
						comment
					</i>
					<p class="form_option">Insertar texto de ayuda<p>
		  		</div>
		  		<div onclick="createField('img_ayuda')" class="col">
		  			<i class=" material_create material-icons">
						add_photo_alternate
					</i>
					<p class="form_option">Insertar imagen de ayuda<p>
		  		</div>
		  	</div>
		  </div>
		</div>
	</div>
</div>