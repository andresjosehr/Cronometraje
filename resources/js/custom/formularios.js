window.Data=[];
window.num=0;
window.num_select=2;
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
		if ($(".crear_form #evento").val()=="") {
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
				$("#btn_create_create_form").text("Editar valores");
				// div_base

				$("#div_base").append('<div class="form-group col" id="store_form" style="display:none">'+
		        									'<button id="btn_create_create_form" onclick="StoreForm()" class="btn btn-danger btn-block" type="button">'+
		        										'Borrar'+
		        									'</button>');

				$("#store_form").appendTo('.form_create_options').show('slow');

				$("#div_base").append('<div class="form-group col" id="store_form2" style="display:none">'+
		        									'<button id="btn_create_create_form" onclick="StoreForm()" class="btn btn-success btn-block" type="button">'+
		        										'Guardar'+
		        									'</button>');

				$("#store_form2").appendTo('.form_create_options').show('slow');

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

		}
	}

	window.createFieldText=function(){

			var tipo=$("#hidden_tipe_field").val();
			var code=makeCode(8)
			window.Data[window.num]= new Array();
			window.Data[window.num]["tipo"]=$("#hidden_tipe_field").val();
			window.Data[window.num]["nombre"]=$("#nombre_field").val();
			window.Data[window.num]["descripcion"]=$("#descripcion_field").val();
			window.Data[window.num]["codigo"]=makeCode(8)
			swal.close();

			$("#div_base").append('<div class="form-group col-md-12" id="'+window.Data[window.num]["codigo"]+'" style="display:none;">'+
			  '<input type="'+tipo+'" class="form-control" id='+code+' placeholder="'+window.Data[window.num]["descripcion"]+'" />'+
			'</div>');

			$('#'+window.Data[window.num]["codigo"]).appendTo('#fields').show('slow');
			window.num++;
		
	}

	window.createFieldEmail=function(){
		var tipo=$("#hidden_tipe_field").val();

		window.Data[window.num]= new Array();
		window.Data[window.num]["tipo"]=$("#hidden_tipe_field").val();
		window.Data[window.num]["nombre"]=$("#nombre_field").val();
		window.Data[window.num]["descripcion"]=$("#descripcion_field").val();
		window.Data[window.num]["codigo_input"]=makeCode(8)
		window.Data[window.num]["codigo_div"]=makeCode(8)
		swal.close();

		$("#div_base").append('<div class="form-group col-md-12" id="'+window.Data[window.num]["codigo_div"]+'" style="display:none;">'+
		  '<input type="'+tipo+'" class="form-control" id='+window.Data[window.num]["codigo_div"]+' placeholder="'+window.Data[window.num]["descripcion"]+'" />'+
		'</div>');

		$('#'+window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
		window.num++;
	}

	window.createFieldDate=function(){
		var tipo="text";

		window.Data[window.num]= new Array();
		window.Data[window.num]["tipo"]=$("#hidden_tipe_field").val();
		window.Data[window.num]["nombre"]=$("#nombre_field").val();
		window.Data[window.num]["descripcion"]=$("#descripcion_field").val();
		window.Data[window.num]["codigo_input"]=makeCode(8)
		window.Data[window.num]["codigo_div"]=makeCode(8)
		swal.close();

		$("#div_base").append('<div class="form-group col-md-12" id="'+window.Data[window.num]["codigo_div"]+'" style="display:none;">'+
		  '<input type="'+tipo+'" class="form-control" id='+window.Data[window.num]["codigo_input"]+' placeholder="'+window.Data[window.num]["descripcion"]+'" />'+
		'</div>');

		$('#'+window.Data[window.num]["codigo_input"]).datepicker({
		       dateFormat: 'yyy-mm-dd'
		 });

		$('#'+window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
		window.num++;
		
	}

	window.createFieldFile=function(){

		window.Data[window.num]= new Array();
		window.Data[window.num]["tipo"]=$("#hidden_tipe_field").val();
		window.Data[window.num]["nombre"]=$("#nombre_field").val();
		window.Data[window.num]["descripcion"]=$("#descripcion_field").val();
		window.Data[window.num]["codigo_input"]=makeCode(8)
		window.Data[window.num]["codigo_div"]=makeCode(8)
		swal.close();

		$("#div_base").append('<div class="form-group col-md-12 form_div_file" style="display: none" id='+window.Data[window.num]["codigo_div"]+'>'+
							    '<input type="text" class="form-control input_form_file" placeholder="'+window.Data[window.num]["descripcion"]+'" readonly>'+
							      '<label class="input-group-btn label_from_file">'+
						                    '<span class="btn btn-primary btn-block">'+
						                        'Subir <input id='+window.Data[window.num]["codigo_input"]+' type="file" style="display: none;" multiple>'+
						                    '</span>'+
						                '</label>'+
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
		swal.close();

		var options="";
		for (var i = 0; i < window.Data[window.num]["Opciones"].length; i++) {
			options=options+"<option>"+window.Data[window.num]["Opciones"][i]+"</option>";
		}

		$("#div_base").append('<div class="form-group col-md-12" id="'+window.Data[window.num]["codigo_div"]+'" style="display:none;">'+
								  '<select class="form-control">'+options+
								  '</select>'+
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
		swal.close();


		var options="";
		for (var i = 0; i < window.Data[window.num]["Opciones"].length; i++) {
			options=options+"<option>"+window.Data[window.num]["Opciones"][i]+"</option>";
		}
		$("#div_base").append('<div class="form-group col-md-12" id="'+window.Data[window.num]["codigo_div"]+'">'+
								  '<select id="'+window.Data[window.num]["codigo_input"]+'" multiple="multiple" class="form-control">'+options+
								  '</select>'+
								'</div>');

		$('#'+window.Data[window.num]["codigo_input"]).multiselect({
			nonSelectedText: 'Selecciona una o varias opciones',
			nSelectedText: "Seleccionados",
			allSelectedText: false,
		});

		$('#'+window.Data[window.num]["codigo_input"]).parent().css("display", "none")
		$('#'+window.Data[window.num]["codigo_input"]).parent().css("margin-left", "6px")
		$('#'+window.Data[window.num]["codigo_input"]).parent().css("margin-right", "6px")
		$('#'+window.Data[window.num]["codigo_input"]).parent().appendTo('#fields').show('slow');
		window.num++;
	}





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
						'<input type="checkbox" id="customToggle2" name="customToggle2" class="custom-control-input" checked="checked">'+
						'<label class="custom-control-label crear_form_custom_control-label" for="customToggle2">Obligatorio</label>'+
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
						'<input type="checkbox" id="customToggle2" name="customToggle2" class="custom-control-input" checked="checked">'+
						'<label class="custom-control-label crear_form_custom_control-label" for="customToggle2">Obligatorio</label>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-4">'+
					'<div class="custom-control custom-toggle custom-toggle-sm mb-1">'+
						'<input type="checkbox" id="customToggle22" name="customToggle2" class="custom-control-input" checked="checked">'+
						'<label class="custom-control-label crear_form_custom_control-label" for="customToggle22">IMG</label>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-4">'+
					'<div class="custom-control custom-toggle custom-toggle-sm mb-1">'+
						'<input type="checkbox" id="customToggle23" name="customToggle2" class="custom-control-input" checked="checked">'+
						'<label class="custom-control-label crear_form_custom_control-label" for="customToggle23">PDF</label>'+
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
						'<input type="checkbox" id="customToggle2" name="customToggle2" class="custom-control-input" checked="checked">'+
						'<label class="custom-control-label crear_form_custom_control-label" for="customToggle2">Obligatorio</label>'+
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
						'<input type="checkbox" id="customToggle2" name="customToggle2" class="custom-control-input" checked="checked">'+
						'<label class="custom-control-label crear_form_custom_control-label" for="customToggle2">Obligatorio</label>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+tipito+'">'+
					'<button onclick="prueba()" class="btn btn-primary btn-block" type="button">Añadir campo al formulario</button>'+
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
	window.Data[window.num]= new Array();
	window.Data[window.num]["Opciones"]= new Array();
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
