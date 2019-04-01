window.Data = {};
window.num=0;
window.num_select=2;
window.num_select_edit=2;
window.num_elim=0;
var creado=false;
$(document).ready(function() {
  var parts = window.location.pathname.split('/');
  var urlPath = parts.pop() || parts.pop();  // handle potential trailing slash
  if (urlPath=="formularios") {
	$(".tool_tooltip").click(function () {
		if ($('.tool_tooltiptext').css("visibility")=="hidden") {
		 $('.tool_tooltiptext').css('visibility','visible').hide().fadeIn(250);
		} else{
			 $('.tool_tooltiptext').fadeOut(250, function () {
			 	$('.tool_tooltiptext').css('visibility','hidden')
			 	$('.tool_tooltiptext').fadeIn(250);
			 });
		}
	})
	}

	$(function() {

  // We can attach the `fileselect` event to all file inputs on the page
  $(document).on('change', ':file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
  });

  // We can watch for our custom `fileselect` event like this
  $(document).ready( function() {
      $(':file').on('fileselect', function(event, numFiles, label) {

          var input = $(this).parents('.input-group').find(':text'),
              log = numFiles > 1 ? numFiles + ' files selected' : label;

          if( input.length ) {
              input.val(log);
          } else {
              if( log )  $("#des_img").val(log);
          }

      });
  });
  
});
});

	window.createForm=function() {

		$(".crear_form #nombre, .crear_form #evento").removeClass("is-invalid");
    	$("small").remove();

    	var val=0;

		if ($(".crear_form #nombre").val()=="") {
			$(".crear_form #nombre").addClass("is-invalid");
    		$(".crear_form #nombre").after('<small id="us_error err_part" style="color:red;">Debes introducir un nombre</small>');
    		val++;
		}
		if ($(".crear_form #evento").val()=="0") {
			$(".crear_form #evento").addClass("is-invalid");
    		$(".crear_form #evento").after('<small id="us_error err_part" style="color:red;">Debes asociar el formulario a un evento</small>');
    		val++;
		}

		if (val==0){

			window.Data["nombre_formulario"]=$(".crear_form #nombre").val();
			window.Data["evento_asociado"]=$(".crear_form #evento").val();
			$(".crear_form .page-title").text(window.Data["nombre_formulario"]);
			$(".crear_form .page-subtitle").text(window.Data["evento_asociado"]);

			if (creado==false) {
				$("#btn_create_form").click();

				// div_base

				$("#div_base").append('<div class="form-group col" id="store_form2" style="display:none">'+
		        									'<button id="btn_edit_create_form" onclick="prevStore()" class="btn btn-success btn-block" type="button">'+
		        										'Guardar'+
		        									'</button>'+
		        									'<div class="loading upd_participante_loading" style="left: 43%;"></div>'+
		        									'</div>');


				$("#div_base").append('<div class="form-group col" id="store_form" style="display:none">'+
		        									'<button id="btn_delete_create_form" onclick="deleteForm()" class="btn btn-danger btn-block" type="button">'+
		        										'Borrar'+
		        									'</button>'+
		        									'</div>');

				$('#btn_create_create_form').parent().hide('slow', function(){
				$('#btn_create_create_form').parent().remove('slow');
					setTimeout('', 5000);
					$("#store_form2").appendTo('.form_create_options').show('slow');
					$("#store_form").appendTo('.form_create_options').show('slow');
				});


				creado=true;
			} 
		}
	}


	window.createField=function(tipo) {
		var tipo_=tipo
		const wrapper = document.createElement('div');
		wrapper.innerHTML = validation(tipo_);

		swal({
		  title: "Informacion del campo", 
		  content: wrapper,		
		});
		$(".swal-footer").css("display", "none");
	}


	window.verificar_info_campo=function(){

		$("#descripcion_field, #nombre_field").removeClass("is-invalid");
		$("#descripcion_field").siblings().remove();
		$("#nombre_field").siblings().remove();
		var val=0;

		if ($("#nombre_field").val()=="") {
			$("#nombre_field").addClass("is-invalid");
			$("#nombre_field").after('<small id="us_error err_part" style="color:red;">Debes escribir un nombre para el campo</small>');
			val++;
		}

		if ($("#descripcion_field").val()=="") {
			$("#descripcion_field").addClass("is-invalid");
    		$("#descripcion_field").after('<small id="us_error err_part" style="color:red;">Debes Escribir una Descripcion para el campo</small>');
    		val++;
		}
		if (val==0) {


			if ($("#hidden_tipe_field").val()=="text") {
				createFieldText()
			}

			if ($("#hidden_tipe_field").val()=="email") {
				createFieldEmail();
			}
			if ($("#hidden_tipe_field").val()=="date") {
				createFieldDate();
			}
			if ($("#hidden_tipe_field").val()=="file") {
				createFieldFile();
			}

			if ($("#hidden_tipe_field").val()=="select") {
				createFieldSelect();
			}
			if ($("#hidden_tipe_field").val()=="multiselect") {
				createFieldMultiSelect();
			}
			if ($("#hidden_tipe_field").val()=="pago") {
				createFieldPago();
			}

		}
	}

	window.createFieldText=function(){

			var tipo=$("#hidden_tipe_field").val();
			var code=makeCode(8)
			window.Data[window.num]= {};
			window.Data[window.num]["tipo"]=$("#hidden_tipe_field").val();
			window.Data[window.num]["nombre"]=$("#nombre_field").val();
			window.Data[window.num]["descripcion"]=$("#descripcion_field").val();
			window.Data[window.num]["codigo_input"]=makeCode(8)
			window.Data[window.num]["codigo_div"]=makeCode(8)
			if ($('#obli').is(":checked")){
			 window.Data[window.num]["Obligatorio"]=true;
			} else{
			 window.Data[window.num]["Obligatorio"]=false;
			}
			swal.close();
			var cero=0

			$("#div_base").append('<div class="row" id="'+window.Data[window.num]["codigo_div"]+'" style="display:none; width:100%" >'+
										'<div class="form-group col-md-8">'+
											  '<input type="'+window.Data[window.num]["tipo"]+'" class="form-control" id='+window.Data[window.num]["codigo_input"]+' placeholder="'+window.Data[window.num]["descripcion"]+'" />'+
										'</div>'+
										'<div class="form-group col-md-2 nopadding" id="'+window.Data[window.num]["codigo"]+'">'+
											  '<button onclick="editField('+"'"+window.num+"'"+')" class="btn btn-success btn-block" type="button">'+
				        					   	'Editar'+
				        					   '</button>'+
										'</div>'+
										'<div class="form-group col-md-2 nopadding" id="'+window.Data[window.num]["codigo"]+'">'+
											  '<button onclick="deleteField('+"'"+window.num+"'"+')" class="btn btn-danger btn-block" type="button">'+
				        					   	'Borrar'+
				        					   '</button>'+
										'</div>'+
								   '</div>');

			$('#'+window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
			window.num++;
		
	}

	window.createFieldEmail=function(){
		var tipo=$("#hidden_tipe_field").val();

		window.Data[window.num]= {};
		window.Data[window.num]["tipo"]=$("#hidden_tipe_field").val();
		window.Data[window.num]["nombre"]=$("#nombre_field").val();
		window.Data[window.num]["descripcion"]=$("#descripcion_field").val();
		window.Data[window.num]["codigo_input"]=makeCode(8)
		window.Data[window.num]["codigo_div"]=makeCode(8)
		if ($('#obli').is(":checked")){
			 window.Data[window.num]["Obligatorio"]=true;
			} else{
			 window.Data[window.num]["Obligatorio"]=false;
			}
		swal.close();

		$("#div_base").append('<div class="row" id="'+window.Data[window.num]["codigo_div"]+'" style="display:none; width:100%" >'+
									'<div class="form-group col-md-8">'+
									  '<input type="'+tipo+'" class="form-control" id='+window.Data[window.num]["codigo_input"]+' placeholder="'+window.Data[window.num]["descripcion"]+'" />'+
									'</div>'+
									'<div class="form-group col-md-2 nopadding" id="'+window.Data[window.num]["codigo"]+'">'+
											  '<button onclick="editField('+"'"+window.num+"'"+')" class="btn btn-success btn-block" type="button">'+
				        					   	'Editar'+
				        					   '</button>'+
									'</div>'+
									'<div class="form-group col-md-2 nopadding" id="'+window.Data[window.num]["codigo"]+'">'+
											  '<button onclick="deleteField('+"'"+window.num+"'"+')" class="btn btn-danger btn-block" type="button">'+
				        					   	'Borrar'+
				        					   '</button>'+
									'</div>'+
								'</div>');

		$('#'+window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
		window.num++;
	}

	window.createFieldDate=function(){
		var tipo="text";

		window.Data[window.num]= {};
		window.Data[window.num]["tipo"]=$("#hidden_tipe_field").val();
		window.Data[window.num]["nombre"]=$("#nombre_field").val();
		window.Data[window.num]["descripcion"]=$("#descripcion_field").val();
		window.Data[window.num]["codigo_input"]=makeCode(8)
		window.Data[window.num]["codigo_div"]=makeCode(8)
		if ($('#obli').is(":checked")){
			 window.Data[window.num]["Obligatorio"]=true;
			} else{
			 window.Data[window.num]["Obligatorio"]=false;
			}
		swal.close();

		$("#div_base").append('<div class="row" id="'+window.Data[window.num]["codigo_div"]+'" style="display:none; width:100%" >'+
									'<div class="form-group col-md-8">'+
									  '<input type="'+tipo+'" class="form-control" id='+window.Data[window.num]["codigo_input"]+' placeholder="'+window.Data[window.num]["descripcion"]+'" />'+
									'</div>'+
									'<div class="form-group col-md-2 nopadding" id="'+window.Data[window.num]["codigo"]+'">'+
											  '<button onclick="editField('+"'"+window.num+"'"+')" class="btn btn-success btn-block" type="button">'+
				        					   	'Editar'+
				        					   '</button>'+
									'</div>'+
									'<div class="form-group col-md-2 nopadding" id="'+window.Data[window.num]["codigo"]+'">'+
											  '<button onclick="deleteField('+"'"+window.num+"'"+')" class="btn btn-danger btn-block" type="button">'+
				        					   	'Borrar'+
				        					   '</button>'+
									'</div>'+
								'</div>');

		$('#'+window.Data[window.num]["codigo_input"]).datepicker({
		       dateFormat: 'yyy-mm-dd'
		 });

		$('#'+window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
		window.num++;
		
	}

	window.createFieldFile=function(){

		window.Data[window.num]= {};
		window.Data[window.num]["tipo"]=$("#hidden_tipe_field").val();
		window.Data[window.num]["nombre"]=$("#nombre_field").val();
		window.Data[window.num]["descripcion"]=$("#descripcion_field").val();
		window.Data[window.num]["codigo_input"]=makeCode(8)
		window.Data[window.num]["codigo_div"]=makeCode(8)
			if ($('#obli').is(":checked")){
			 window.Data[window.num]["Obligatorio"]=true;
			} else{
			 window.Data[window.num]["Obligatorio"]=false;
			}
			if ($('#img').is(":checked")){
			 window.Data[window.num]["img"]=true;
			} else{
			 window.Data[window.num]["img"]=false;
			}
			if ($('#pdf').is(":checked")){
			 window.Data[window.num]["pdf"]=true;
			} else{
			 window.Data[window.num]["pdf"]=false;
			}
		swal.close();

		$("#div_base").append('<div class="row" id="'+window.Data[window.num]["codigo_div"]+'" style="display:none; width:100%" >'+
									'<div class="form-group col-md-8 form_div_file">'+
									    '<input type="text" class="form-control input_form_file" placeholder="'+window.Data[window.num]["descripcion"]+'" readonly>'+
									      '<label class="input-group-btn label_from_file">'+
									                 '<span class="btn btn-primary btn-block">'+
									                     'Subir <input id='+window.Data[window.num]["codigo_input"]+' type="file" style="display: none;" multiple>'+
									                 '</span>'+
									        '</label>'+
									'</div>'+
									'<div class="form-group col-md-2 nopadding" id="'+window.Data[window.num]["codigo"]+'">'+
											  '<button onclick="editField('+"'"+window.num+"'"+')" class="btn btn-success btn-block" type="button">'+
				        					   	'Editar'+
				        					   '</button>'+
									'</div>'+
									'<div class="form-group col-md-2 nopadding" id="'+window.Data[window.num]["codigo"]+'">'+
											  '<button onclick="deleteField('+"'"+window.num+"'"+')" class="btn btn-danger btn-block" type="button">'+
				        					   	'Borrar'+
				        					   '</button>'+
									'</div>'+
							   '</div>');

		$('#'+window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');

			var id_div=window.Data[window.num]["codigo_div"];
			var id_input=window.Data[window.num]["codigo_input"];

			$(document).ready( function() {
		      $('#'+id_input).on('fileselect', function(event, numFiles, label) {

		          var input = $(this).parents("#"+id_div+' .input-group').find(':text'),
		              log = numFiles > 1 ? numFiles + ' files selected' : label;

		          if( input.length ) {
		              input.val(log);
		          } else {
		              if( log ) $("#"+id_div+" .input_form_file").val(log);
		          }

		      });
		  });


		window.num++;
	}


	window.createFieldSelect=function(){

		window.Data[window.num]["tipo"]=$("#hidden_tipe_field").val();
		window.Data[window.num]["nombre"]=$("#nombre_field").val();
		window.Data[window.num]["descripcion"]=$("#descripcion_field").val();
		window.Data[window.num]["codigo_input"]=makeCode(8)
		window.Data[window.num]["codigo_div"]=makeCode(8)
		if ($('#obli').is(":checked")){
			 window.Data[window.num]["Obligatorio"]=true;
			} else{
			 window.Data[window.num]["Obligatorio"]=false;
			}
		swal.close();

		var options="<option>"+window.Data[window.num]["descripcion"]+"</option>";
		for (var i = 0; i < window.Data[window.num]["Opciones"].length; i++) {
			options=options+"<option>"+window.Data[window.num]["Opciones"][i]+"</option>";
		}

		$("#div_base").append('<div class="row" id="'+window.Data[window.num]["codigo_div"]+'" style="display:none; width:100%" >'+
								'<div class="form-group col-md-8">'+
								  '<select class="form-control" id="'+window.Data[window.num]["codigo_input"]+'">'+options+
								  '</select>'+
								'</div>'+
								'<div class="form-group col-md-2 nopadding" id="'+window.Data[window.num]["codigo"]+'">'+
											  '<button onclick="editField('+"'"+window.num+"'"+')" class="btn btn-success btn-block" type="button">'+
				        					   	'Editar'+
				        					   '</button>'+
									'</div>'+
									'<div class="form-group col-md-2 nopadding" id="'+window.Data[window.num]["codigo"]+'">'+
											  '<button onclick="deleteField('+"'"+window.num+"'"+')" class="btn btn-danger btn-block" type="button">'+
				        					   	'Borrar'+
				        					   '</button>'+
									'</div>'+
								'</div>');

		$('#'+window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
		window.num++;
	}

	window.createFieldMultiSelect=function(){

		var tipo=$("#hidden_tipe_field").val();
		var code=makeCode(8)
		window.Data[window.num]["tipo"]=$("#hidden_tipe_field").val();
		window.Data[window.num]["nombre"]=$("#nombre_field").val();
		window.Data[window.num]["descripcion"]=$("#descripcion_field").val();
		window.Data[window.num]["codigo_input"]=makeCode(8)
		window.Data[window.num]["codigo_div"]=makeCode(8)
		if ($('#obli').is(":checked")){
			 window.Data[window.num]["Obligatorio"]=true;
			} else{
			 window.Data[window.num]["Obligatorio"]=false;
			}
		swal.close();


		var options="";
		for (var i = 0; i < window.Data[window.num]["Opciones"].length; i++) {
			options=options+"<option>"+window.Data[window.num]["Opciones"][i]+"</option>";
		}
		  $("#div_base").append('<div class="row" id="'+window.Data[window.num]["codigo_div"]+'" style="width:100%" >'+
									'<div class="form-group col-md-8">'+
										'<select id="'+window.Data[window.num]["codigo_input"]+'" multiple="multiple" class="form-control">'+options+
										'</select>'+
									'</div>'+
									'<div class="form-group col-md-2 nopadding" id="'+window.Data[window.num]["codigo"]+'">'+
										'<button onclick="editField('+"'"+window.num+"'"+')" class="btn btn-success btn-block" type="button">'+
					        			 	'Editar'+
					        			'</button>'+
									'</div>'+
									'<div class="form-group col-md-2 nopadding" id="'+window.Data[window.num]["codigo"]+'">'+
										'<button onclick="deleteField('+"'"+window.num+"'"+')" class="btn btn-danger btn-block" type="button">'+
					        				'Borrar'+
					        			'</button>'+
									'</div>'+
							    '</div>');

		$('#'+window.Data[window.num]["codigo_input"]).multiselect({
			nonSelectedText: window.Data[window.num]["descripcion"],
			nSelectedText: "Seleccionados",
			allSelectedText: false,
		});

		$('#'+window.Data[window.num]["codigo_div"]).css("display", "none")
		$('#'+window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
		window.num++;
	}

	window.createFieldPago=function(){

		var tipo=$("#hidden_tipe_field").val();

		window.Data[window.num]= {};
		window.Data[window.num]["tipo"]=$("#hidden_tipe_field").val();
		window.Data[window.num]["codigo"]=$("#descripcion_field").val().replace(/"/gi, "'");
		window.Data[window.num]["codigo_div"]=makeCode(8)
		swal.close();

		

		$("#div_base").append('<div class="row" id="'+window.Data[window.num]["codigo_div"]+'" style="width:100%;display:none" >'+
									'<div align="center" style="width:100%;" class="col-md-8" id="'+window.Data[window.num]["codigo_div"]+'">'+
									  '<button style="margin-top: 0px;" title="El boton mostrado es un ejemplo no funcional del boton, el codigo del boton insertado sera renderizado luego de guardar el formulario" mp-mode="dftl" href="javascript:void(0)" name="MP-payButton" class="MP-blue-common-CDl MP-ar-l-rn-Dl" target="">Pagar</button>'+
									'</div>'+
									'<div class="form-group col-md-2 nopadding" id="0">'+
										'<button onclick="editField('+"'"+window.num+"'"+')" class="btn btn-success btn-block" type="button">'+
					        			 	'Editar'+
					        			'</button>'+
									'</div>'+
									'<div class="form-group col-md-2 nopadding" id="1">'+
										'<button onclick="deleteField('+"'"+window.num+"'"+')" class="btn btn-danger btn-block" type="button">'+
					        				'Borrar'+
					        			'</button>'+
									'</div>'+
							   '</div>');

		$('#'+window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
		window.num++;
	};

window.makeCode=function(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

window.validation=function(tipito){
		if (tipito=="text" || tipito=="email" || tipito=="date") {
			var validation = '<div class="form-row">'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="nombre_field" placeholder="Nombre del campo" required="">'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="descripcion_field" placeholder="Descripcion del campo" required="">'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<div class="custom-control custom-toggle custom-toggle-sm mb-1">'+
						'<input type="checkbox" id="obli" class="custom-control-input" checked="checked">'+
						'<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+tipito+'">'+
					'<button onclick="verificar_info_campo()" class="btn btn-primary btn-block" type="button">Añadir campo al formulario</button>'+
				'</div>'+
			'</div>';
		}

		if (tipito=="file") {
			var validation = '<div class="form-row">'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="nombre_field" placeholder="Nombre del campo" required="">'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="descripcion_field" placeholder="Descripcion del campo" required="">'+
				'</div>'+
				'<div class="form-group col-md-4">'+
					'<div class="custom-control custom-toggle custom-toggle-sm mb-1">'+
						'<input type="checkbox" id="obli" name="customToggle2" class="custom-control-input" checked="checked">'+
						'<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-4">'+
					'<div class="custom-control custom-toggle custom-toggle-sm mb-1">'+
						'<input type="checkbox" id="img" name="customToggle2" class="custom-control-input" checked="checked">'+
						'<label class="custom-control-label crear_form_custom_control-label" for="img">IMG</label>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-4">'+
					'<div class="custom-control custom-toggle custom-toggle-sm mb-1">'+
						'<input type="checkbox" id="pdf" class="custom-control-input" checked="checked">'+
						'<label class="custom-control-label crear_form_custom_control-label" for="pdf">PDF</label>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+tipito+'">'+
					'<button onclick="verificar_info_campo()" class="btn btn-primary btn-block" type="button">Añadir campo al formulario</button>'+
				'</div>'+
			'</div>';
		}

		if (tipito=="select") {
			var validation = '<div class="form-row">'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="nombre_field" placeholder="Nombre del campo" required="">'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="descripcion_field" placeholder="Descripcion del campo" required="">'+
				'</div>'+
				'<div class="select_field_create">'+
					'<div class="swal-title">Opciones del campo</div>'+
					'<div class="form-group col-md-12">'+
						'<input type="text" class="form-control" id="sub_field_select_0" placeholder="Descripcion del campo" required="">'+
					'</div>'+
					'<div class="form-group col-md-12">'+
						'<input type="text" class="form-control" id="sub_field_select_1" placeholder="Descripcion del campo" required="">'+
					'</div>'+
					'<div id="div_base_select"></div>'+
					'<div class="form-group col-md-12">'+
						'<button onclick="create_field_select()" class="btn btn-secondary btn-block" type="button">Añadir otra opcion</button>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<div class="custom-control custom-toggle custom-toggle-sm mb-1">'+
						'<input type="checkbox" id="obli" name="customToggle2" class="custom-control-input" checked="checked">'+
						'<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+tipito+'">'+
					'<button onclick="prueba()" class="btn btn-primary btn-block" type="button">Añadir campo al formulario</button>'+
				'</div>'+
			'</div>';
		}

		if (tipito=="multiselect") {
			var validation = '<div class="form-row">'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="nombre_field" placeholder="Nombre del campo" required="">'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="descripcion_field" placeholder="Descripcion del campo" required="">'+
				'</div>'+
				'<div class="select_field_create">'+
					'<div class="swal-title">Opciones del campo</div>'+
					'<div class="form-group col-md-12">'+
						'<input type="text" class="form-control" id="sub_field_select_0" placeholder="Descripcion del campo" required="">'+
					'</div>'+
					'<div class="form-group col-md-12">'+
						'<input type="text" class="form-control" id="sub_field_select_1" placeholder="Descripcion del campo" required="">'+
					'</div>'+
					'<div id="div_base_select"></div>'+
					'<div class="form-group col-md-12">'+
						'<button onclick="create_field_select()" class="btn btn-secondary btn-block" type="button">Añadir otra opcion</button>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<div class="custom-control custom-toggle custom-toggle-sm mb-1">'+
						'<input type="checkbox" id="obli" name="customToggle2" class="custom-control-input" checked="checked">'+
						'<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+tipito+'">'+
					'<button onclick="prueba()" class="btn btn-primary btn-block" type="button">Añadir campo al formulario</button>'+
				'</div>'+
			'</div>';
		}

		if (tipito=="pago") {
			var validation = '<div class="form-row">'+
				'<div class="form-group col-md-12">'+
					'<textarea type="textarea" style="width: 100%;height: 150px;" class="form-control" id="descripcion_field" placeholder="Introduce el codigo del boton de pago" required=""></textarea>'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+tipito+'">'+
					'<button onclick="verificar_info_campo()" class="btn btn-primary btn-block" type="button">Añadir campo al formulario</button>'+
				'</div>'+
			'</div>';
		}

		return validation;
}

window.create_field_select=function(){

	$("#div_base_select").append('<div style="display: none" class="form-group col-md-12" id="sub_field_select_content'+window.num_select+'">'+
									'<div style="display: flex">'+
										'<input type="text" class="form-control" id="sub_field_select_'+window.num_select+'" placeholder="Descripcion del campo" required="">'+
										'<button onclick="remove_field_select(sub_field_select_content'+window.num_select+','+window.num_select+')" type="button" class="btn btn-sm btn-danger mr-1">Eliminar</button>'+
									'</div>'+
								 '</div>');

	$('#sub_field_select_content'+window.num_select).insertBefore('#div_base_select').show('slow');
	$('.select_field_create').animate({
	    scrollTop: $('#sub_field_select_content'+window.num_select).offset().top - $('.select_field_create').offset().top + $('.select_field_create').scrollTop()
	});
	window.num_select++;
}

window.remove_field_select=function(id, num_select) {

	$('#'+id.id).hide('slow', function(){ 
		$('#'+id.id).remove(); 
	});

}

window.prueba=function() {
	$(".select_field_create small").parent().remove();
	var clase;
	var k=0;
	window.Data[window.num]= {};
	window.Data[window.num]["Opciones"]= {};
	for (var i = 0; i < window.num_select; i++) {
		if (i<2) {
			clase="invalid_create_2";
		} else{
			clase="invalid_create_1";
		}
		$("#sub_field_select_"+i).removeClass("is-invalid");
		if($('#sub_field_select_'+i).val()){
			window.Data[window.num]["Opciones"][k] = $('#sub_field_select_'+i).val();
			k++;
		} else{
			if($('#sub_field_select_'+i).length){
				$("#sub_field_select_"+i).addClass("is-invalid");
    			$("#sub_field_select_"+i).parent().after('<div class="'+clase+'"><small id="us_error err_part" style="color:red;">Debes llenar este campo es obligatorio</small><div>');
			}
		}
	}

	 verificar_info_campo();
}

window.scrollbotton=function(){

	$("html, body").animate({ scrollTop: $(document).height() }, 1000);
}


window.swaleditField=function(num){

	var obli="";
	if (window.Data[num]["Obligatorio"]==true) {
		obli='checked="checked"';
	}
	if (window.Data[num]["tipo"]=="text" || window.Data[num]["tipo"]=="email" || window.Data[num]["tipo"]=="date") {
			var validation = '<div class="form-row">'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="nombre_field" placeholder="'+window.Data[num]["nombre"]+' | Nombre del campo" required="">'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="descripcion_field" placeholder="'+window.Data[num]["descripcion"]+' | Descripcion del campo" required="">'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<div class="custom-control custom-toggle custom-toggle-sm mb-1">'+
						'<input type="checkbox" id="obli" class="custom-control-input" '+obli+'>'+
						'<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-6">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+window.Data[num]["tipo"]+'">'+
					'<button onclick="verificarEdit('+"'"+num+"'"+')" class="btn btn-primary btn-block" type="button">Editar campo</button>'+
				'</div>'+
				'<div class="form-group col-md-6">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+window.Data[num]["tipo"]+'">'+
					'<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>'+
				'</div>'+
			'</div>';
		}

		if (window.Data[num]["tipo"]=="select" || window.Data[num]["tipo"]=="multiselect") {
			var opciones='';
			for (var i = 2; i < window.Data[num]["Opciones"].length; i++) {
				opciones=opciones+'<div class="form-group col-md-12" id="sub_field_select_content'+window.num_select+'">'+
									'<div style="display: flex">'+
										'<input type="text" class="form-control" id="sub_field_select_'+window.num_select+'" placeholder="'+window.Data[num]["Opciones"][i]+'" required="">'+
										'<button onclick="remove_field_select(sub_field_select_content'+window.num_select+','+window.num_select+')" type="button" class="btn btn-sm btn-danger mr-1">Eliminar</button>'+
									'</div>'+
								 '</div>'
				window.num_select++;
			}
			var validation = '<div class="form-row">'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="nombre_field" placeholder="'+window.Data[num]["nombre"]+'" required="">'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="descripcion_field" placeholder="'+window.Data[num]["descripcion"]+'" required="">'+
				'</div>'+
				'<div class="select_field_create">'+
					'<div class="swal-title">Opciones del campo</div>'+
					'<div class="form-group col-md-12">'+
						'<input type="text" class="form-control" id="sub_field_select_0" placeholder="'+window.Data[num]["Opciones"][0]+'" required="">'+
					'</div>'+
					'<div class="form-group col-md-12">'+
						'<input type="text" class="form-control" id="sub_field_select_1" placeholder="'+window.Data[num]["Opciones"][1]+'" required="">'+
					'</div>'+
					opciones+
					'<div id="div_base_select"></div>'+
					'<div class="form-group col-md-12">'+
						'<button onclick="create_field_select()" class="btn btn-secondary btn-block" type="button">Añadir otra opcion</button>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<div class="custom-control custom-toggle custom-toggle-sm mb-1">'+
						'<input type="checkbox" id="obli" name="customToggle2" class="custom-control-input" checked="checked">'+
						'<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-6">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+window.Data[num]["tipo"]+'">'+
					'<button onclick="editSelect('+"'"+num+"'"+')" class="btn btn-primary btn-block" type="button">Actualizar campo</button>'+
				'</div>'+
				'<div class="form-group col-md-6">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+window.Data[num]["tipo"]+'">'+
					'<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>'+
				'</div>'+
			'</div>';
		}
		

		if (window.Data[num]["tipo"]=="file") {

			var obli="", pdf="", img="";
			if (window.Data[num]["Obligatorio"]==true) {
				obli='checked="checked"';
			}
			if (window.Data[num]["pdf"]==true) {
				pdf='checked="checked"';
			}
			if (window.Data[num]["img"]==true) {
				img='checked="checked"';
			}
			var validation = '<div class="form-row">'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="nombre_field" placeholder="'+window.Data[num]["nombre"]+' | Nombre del campo" required="">'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="descripcion_field" placeholder="'+window.Data[num]["descripcion"]+' | Descripcion del campo" required="">'+
				'</div>'+
				'<div class="form-group col-md-4">'+
					'<div class="custom-control custom-toggle custom-toggle-sm mb-1">'+
						'<input type="checkbox" id="obli" name="customToggle2" class="custom-control-input" '+obli+'>'+
						'<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-4">'+
					'<div class="custom-control custom-toggle custom-toggle-sm mb-1">'+
						'<input type="checkbox" id="img" name="customToggle2" class="custom-control-input" '+img+'>'+
						'<label class="custom-control-label crear_form_custom_control-label" for="img">IMG</label>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-4">'+
					'<div class="custom-control custom-toggle custom-toggle-sm mb-1">'+
						'<input type="checkbox" id="pdf" class="custom-control-input" '+pdf+'>'+
						'<label class="custom-control-label crear_form_custom_control-label" for="pdf">PDF</label>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-6">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+window.Data[num]["tipo"]+'">'+
					'<button onclick="verificarEdit('+"'"+num+"'"+')" class="btn btn-primary btn-block" type="button">Editar campo</button>'+
				'</div>'+
				'<div class="form-group col-md-6">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+window.Data[num]["tipo"]+'">'+
					'<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>'+
				'</div>'+
			'</div>';
		}

		if (window.Data[num]["tipo"]=="pago") {
			var validation = '<div class="form-row">'+
				'<div class="form-group col-md-12">'+
					'<textarea type="textarea" style="width: 100%;height: 150px;" class="form-control" id="descripcion_field" placeholder="'+window.Data[num]["codigo"]+'" required=""></textarea>'+
				'</div>'+
				'<div class="form-group col-md-6">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+window.Data[num]["tipo"]+'">'+
					'<button onclick="verificarEdit('+"'"+num+"'"+')" class="btn btn-primary btn-block" type="button">Añadir campo al formulario</button>'+
				'</div>'+
				'<div class="form-group col-md-6">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+window.Data[num]["tipo"]+'">'+
					'<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>'+
				'</div>'+
			'</div>';
		}

		return validation
}



window.editField=function(num) {

		const wrapper = document.createElement('div');
		wrapper.innerHTML = swaleditField(num);

		swal({
		  title: "Informacion del campo", 
		  content: wrapper,		
		});
		$(".swal-footer").css("display", "none");
	}



window.verificarEdit=function(num){

		$("#descripcion_field, #nombre_field").removeClass("is-invalid");
		$("#descripcion_field").siblings().remove();
		$("#nombre_field").siblings().remove();
		var val=0;

		if ($("#nombre_field").val()=="") {
			$("#nombre_field").addClass("is-invalid");
			$("#nombre_field").after('<small id="us_error err_part" style="color:red;">Debes escribir un nombre para el campo</small>');
			val++;
		}

		if ($("#descripcion_field").val()=="") {
			$("#descripcion_field").addClass("is-invalid");
    		$("#descripcion_field").after('<small id="us_error err_part" style="color:red;">Debes Escribir una Descripcion para el campo</small>');
    		val++;
		}
		if (val==0) {


			if ($("#hidden_tipe_field").val()=="text") {
				editFieldText(num);
			}

			if ($("#hidden_tipe_field").val()=="email") {
				editFieldEmail(num);
			}
			if ($("#hidden_tipe_field").val()=="date") {
				editFieldDate(num)
			}
			if ($("#hidden_tipe_field").val()=="file") {
				editFieldFile(num)
			}

			if ($("#hidden_tipe_field").val()=="select") {
				editFieldSelect(num)
			}
			if ($("#hidden_tipe_field").val()=="multiselect") {
				editFieldMultiSelect(num)
			}
			if ($("#hidden_tipe_field").val()=="pago") {
				editFieldPago(num)
			}

		}
	}


	window.editFieldText=function(num){

			window.Data[num]["nombre"]=$("#nombre_field").val();
			window.Data[num]["descripcion"]=$("#descripcion_field").val();
			if ($('#obli').is(":checked")){
			 window.Data[num]["Obligatorio"]=true;
			} else{
			 window.Data[num]["Obligatorio"]=false;
			}
			swal.close();

			$("#"+window.Data[num]["codigo_input"]).attr("placeholder", window.Data[num]["descripcion"]);
			swal("Listo", "El campo ha sido actualizado exitosamente", "success");
	}

	window.editFieldEmail=function(num){

			window.Data[num]["nombre"]=$("#nombre_field").val();
			window.Data[num]["descripcion"]=$("#descripcion_field").val();
			if ($('#obli').is(":checked")){
			 window.Data[num]["Obligatorio"]=true;
			} else{
			 window.Data[num]["Obligatorio"]=false;
			}
			swal.close();

			$("#"+window.Data[num]["codigo_input"]).attr("placeholder", window.Data[num]["descripcion"]);
			swal("Listo", "El campo ha sido actualizado exitosamente", "success");
	}

	window.editFieldDate=function(num){

			window.Data[num]["nombre"]=$("#nombre_field").val();
			window.Data[num]["descripcion"]=$("#descripcion_field").val();
			if ($('#obli').is(":checked")){
			 window.Data[num]["Obligatorio"]=true;
			} else{
			 window.Data[num]["Obligatorio"]=false;
			}
			swal.close();

			$("#"+window.Data[num]["codigo_input"]).attr("placeholder", window.Data[num]["descripcion"]);
			swal("Listo", "El campo ha sido actualizado exitosamente", "success");
	}


	window.editFieldFile=function(num){

			window.Data[num]["nombre"]=$("#nombre_field").val();
			window.Data[num]["descripcion"]=$("#descripcion_field").val();

			if ($('#obli').is(":checked")){
			 window.Data[num]["Obligatorio"]=true;
			} else{
			 window.Data[num]["Obligatorio"]=false;
			}
			if ($('#img').is(":checked")){
			 window.Data[num]["img"]=true;
			} else{
			 window.Data[num]["img"]=false;
			}
			if ($('#pdf').is(":checked")){
			 window.Data[num]["pdf"]=true;
			} else{
			 window.Data[num]["pdf"]=false;
			}
		swal.close();

		$("#"+window.Data[num]["codigo_div"]+" .form_div_file input").attr("placeholder", window.Data[num]["descripcion"]);
		swal("Listo", "El campo ha sido actualizado exitosamente", "success");
	}

	window.editSelect=function(num){

		$(".select_field_create small").parent().remove();
		var clase;
		var k=0;
		codigo_div = window.Data[num]["codigo_div"];
		codigo_input = window.Data[num]["codigo_input"];
		window.Data[num]= {};

		window.Data[num]["codigo_div"] = codigo_div;
		window.Data[num]["codigo_input"] = codigo_input;

		window.Data[num]["Opciones"]= {};
		for (var i = 0; i < window.num_select; i++) {
			if (i<2) {
				clase="invalid_create_2";
			} else{
				clase="invalid_create_1";
			}
			$("#sub_field_select_"+i).removeClass("is-invalid");
			if($('#sub_field_select_'+i).val()){
				window.Data[num]["Opciones"][k] = $('#sub_field_select_'+i).val();
				k++;
			} else{
				if($('#sub_field_select_'+i).length){
					$("#sub_field_select_"+i).addClass("is-invalid");
	    			$("#sub_field_select_"+i).parent().after('<div class="'+clase+'"><small id="us_error err_part" style="color:red;">Debes llenar este campo es obligatorio</small><div>');
				}
			}
		}
	  verificarEdit(num);
	}

	window.editFieldSelect=function(num){

		window.Data[num]["tipo"]="select";
		window.Data[num]["nombre"]=$("#nombre_field").val();
		window.Data[num]["descripcion"]=$("#descripcion_field").val();

		if ($('#obli').is(":checked")){
			 window.Data[num]["Obligatorio"]=true;
			} else{
			 window.Data[num]["Obligatorio"]=false;
			}
		swal.close();

		var f=0; var k=0;
		$("#"+window.Data[num]["codigo_input"]+" option").each(function(){
			if (f!=0) {
				$(this).text(Data[num]["Opciones"][k])
				k++;
			} else{
				$(this).text(Data[num]["descripcion"])
				f++;
			}
		});

		swal("Listo", "El campo ha sido actualizado exitosamente", "success");
	}

	window.editFieldMultiSelect=function(num){
		window.Data[num]["tipo"]="multiselect";
		window.Data[num]["nombre"]=$("#nombre_field").val();
		window.Data[num]["descripcion"]=$("#descripcion_field").val();

		if ($('#obli').is(":checked")){
			 window.Data[num]["Obligatorio"]=true;
			} else{
			 window.Data[num]["Obligatorio"]=false;
			}
		swal.close();

		$("#"+window.Data[num]["codigo_div"]+" div span div ul li a label").each(function(){
			$(this).html('<input type="checkbox" value="1">'+Data[num]["descripcion"])
		});

		swal("Listo", "El campo ha sido actualizado exitosamente", "success");
	}

	window.editFieldPago=function(num){

		window.Data[num]["codigo"]=$("#descripcion_field").val();
		swal.close();
		swal("Listo", "El campo ha sido actualizado exitosamente", "success");
	}

	window.deleteField=function(num){

		swal({
          title: "Espera!",
          text: "¿Estas seguro de eliminar este campo?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
          	  window.num_elim++
              $('#'+window.Data[num]["codigo_div"]).hide('slow');
               num=Number(num)
               for (var i = num+1; i < window.num; i++) {
               	 res=Number(i)
               	 window.Data[i-1]=window.Data[i];
                 $("#"+window.Data[i-1]["codigo_div"]+" .btn-success").attr("onclick", "editField("+"'"+(res-1)+"'"+")")
                 $("#"+window.Data[i-1]["codigo_div"]+" .btn-danger").attr("onclick", "deleteField("+"'"+(res-1)+"'"+")")
		        		}
		        		delete window.Data[window.num-1];
               	window.num--;
            }
        });


	}


	window.deleteForm=function(){

		swal({
          title: "Espera!",
          text: "¿Estas seguro de eliminar todos los campos del formulario? Esta accion no se puede revertir",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {

          	  $("#fields").each(function() {
					      $(this).hide("slow");
					   });
          	  $("#fields").empty();

          	  $("#fields").show("slow");

            	window.num=0;
				window.num_select=2;
				window.num_elim=0;
				var nom=window.Data["nombre_formulario"]=$(".crear_form #nombre").val();
				var des=window.Data["evento_asociado"]=$(".crear_form #evento").val();
				window.Data = {};
				window.Data["nombre_formulario"] =nom;
				window.Data["evento_asociado"] =des;

			}
        });

	}

window.prevStore=function(){

	StoreForm(window.Data)
}

window.StoreForm=function(Datos){

	if (window.num!=0) {

	swal({
          title: "Espera!",
          text: "¿Estas seguro de querer guardar el formulario?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
          	$( "#btn_edit_create_form" ).fadeOut(250, function () {
				    	$( ".upd_participante_loading" ).fadeIn(250);
				    });

          		var file_data = $("#img_form").prop("files")[0];
				var form_data = new FormData();                  
				form_data.append("file", file_data)              
				form_data.append("user_id", 123)
				form_data.append("Datos", JSON.stringify(window.Data)) 

          		$.ajax({
				    type: 'post',
				    url: url+"/formularios/createPost",
				    dataType: 'script',
						cache: false,
	          contentType: false,
	          processData: false,				    
				    data: form_data,
				    success: function(msg){
				    	 if (msg=="Exito") {
				    	 	$( ".upd_participante_loading" ).fadeOut(250, function () {
						    	$( "#btn_edit_create_form" ).fadeIn(250);
						    });

				    	 	swal({
					          title: "Listo!",
					          text: "Tu formulario ha sido almacenado exitosamente",
					          icon: "success",
					        })
					        .then(() => {
					          location.reload(true);
					        });
				    	 }
				    }
				});
			}
        });

  }else{
  	swal("Espera", "El formulario debe tener al menos un campo para poder ser almacenado", "warning");
  }

}


window.DateVist=function(id){
		$('#'+id).datepicker({
		       dateFormat: 'yyy-mm-dd'
		 });
}

window.MultiSelectVist=function(id, descripcion){
		$('#'+id).multiselect({
       nonSelectedText: descripcion,
       nSelectedText: "Seleccionados",
       allSelectedText: false,
     });
}


window.FileVist=function(id_div, id_input){

	$('#'+id_input).on('fileselect', function(event, numFiles, label) {

		          var input = $(this).parents("#"+id_div+' .input-group').find(':text'),
		              log = numFiles > 1 ? numFiles + ' files selected' : label;

		          if( input.length ) {
		              input.val(log);
		          } else {
		              if( log ) $("#"+id_div+" .input_form_file").val(log);
		          }

		      });
		
}
