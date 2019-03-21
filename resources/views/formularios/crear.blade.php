
<div class="crear_form">

	<div class="form-row">
      <div class="form-group col-md-4">
        <input type="text" class="form-control" id="nombre" placeholder="Nombre" required="">
      </div>
      <div class="form-group col-md-4">
        <input type="text" class="form-control" id="evento" placeholder="Evento asignado" required="">
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
		  </div>
		</div>
	</div>
</div>