



window.EC_swaleditField=function(info_camp){

		window.info_camp=info_camp;
		// console.log(window.info_camp);
		// console.log("--------------------------------")
		if (info_camp.obligatorio==1) {
			var obli='checked="checked"';
		} else{
			var obli;
		}
	if (info_camp.tipo=="text" || info_camp.tipo=="email" || info_camp.tipo=="date") {
			var validation = '<div class="form-row">'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="nombre_field" value="'+info_camp.nombre+'" required="">'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="descripcion_field" value="'+info_camp.descripcion+'" required="">'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<div class="custom-control custom-toggle custom-toggle-sm mb-1">'+
						'<input type="checkbox" id="obli" class="custom-control-input" '+obli+'>'+
						'<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-6">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+info_camp.tipo+'">'+
					'<button onclick="EC_verificarEdit()" id="edit_at_edit" class="btn btn-primary btn-block" type="button">Editar campo</button>'+
				'</div>'+
				'<div class="form-group col-md-6">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+info_camp.tipo+'">'+
					'<button onclick="swal.close();" id="delete_at_edit" class="btn btn-danger btn-block" type="button">Cancelar</button>'+
				'</div>'+
				'<div class="loading upd_participante_loading" style="left: 46%;margin-top:-50px;"></div>'+
			'</div>';
		}

		if (info_camp.tipo=="select" || info_camp.tipo=="multiselect") {

			window.NumSelec=window.info_camp.subcampos.length;
			var opciones='';

			var i=0; var opc={};
			$.each( info_camp.subcampos, function( key, value ) {
				$.each( value, function( key2, value2 ) {
					if (key2=="descripcion") {
						if (i>1) {
					 		opciones=opciones+'<div class="form-group col-md-12" id="sub_field_select_content'+i+'">'+
									'<div style="display: flex">'+
										'<input type="text" class="form-control" id="sub_field_select_'+i+'" placeholder="Ingresa un Valor" value="'+value2+'" required="">'+
										'<button onclick="EC_remove_field_select(sub_field_select_content'+i+','+i+')" type="button" class="btn btn-sm btn-danger mr-1">Eliminar</button>'+
									'</div>'+
								 '</div>';
					 	} else{
					 		opc[i]=value2;
					 	}

					 	 i++;

				  	}
				});
			});

			var validation = '<div class="form-row">'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="nombre_field" value="'+info_camp.nombre+'" placeholder="Escribe un nombre" required="">'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="descripcion_field" value="'+info_camp.descripcion+'" placeholder="Escribe una Descripcion" required="">'+
				'</div>'+
				'<div class="select_field_create">'+
					'<div class="swal-title">Opciones del campo</div>'+
					'<div class="form-group col-md-12">'+
						'<input type="text" class="form-control" id="sub_field_select_0" value="'+opc[0]+'" placeholder="Ingresa un Valor" required="">'+
					'</div>'+
					'<div class="form-group col-md-12">'+
						'<input type="text" class="form-control" id="sub_field_select_1" value="'+opc[1]+'" placeholder="Ingresa un Valor" required="">'+
					'</div>'+
					opciones+
					'<div id="div_base_select"></div>'+
					'<div class="form-group col-md-12">'+
						'<button onclick="EC_create_field_select()" class="btn btn-secondary btn-block" type="button">Añadir otra opcion</button>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<div class="custom-control custom-toggle custom-toggle-sm mb-1">'+
						'<input type="checkbox" id="obli" name="customToggle2" class="custom-control-input" '+obli+'>'+
						'<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>'+
					'</div>'+
				'</div>'+
				'<div class="form-group col-md-6">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+info_camp.tipo+'">'+
					'<button onclick="EC_editSelect()" id="edit_at_edit" class="btn btn-primary btn-block" type="button">Actualizar campo</button>'+
				'</div>'+
				'<div class="form-group col-md-6">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+info_camp.tipo+'">'+
					'<button onclick="swal.close();" id="delete_at_edit" class="btn btn-danger btn-block" type="button">Cancelar</button>'+
				'</div>'+
				'<div class="loading upd_participante_loading" style="left: 46%;margin-top:-50px;"></div>'+
			'</div>';
		}
		

		if (info_camp.tipo=="file") {

			var pdf="", img="";

			if (info_camp.pdf==1) {
				pdf='checked="checked"';
			}
			if (info_camp.img==1) {
				img='checked="checked"';
			}
			var validation = '<div class="form-row">'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="nombre_field" placeholder="Ingresa el nombre del campo" value="'+info_camp.nombre+'" required="">'+
				'</div>'+
				'<div class="form-group col-md-12">'+
					'<input type="text" class="form-control" id="descripcion_field" placeholder="Ingresa la descripción del campo" value="'+info_camp.descripcion+'" required="">'+
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
					'<input type="hidden" id="hidden_tipe_field" value="'+info_camp.tipo+'">'+
					'<button onclick="EC_editFieldFile()" class="btn btn-primary btn-block" type="button">Editar campo</button>'+
				'</div>'+
				'<div class="form-group col-md-6">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+info_camp.tipo+'">'+
					'<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>'+
				'</div>'+
			'</div>';
		}

		if (info_camp.tipo=="pago") {
			var validation = '<div class="form-row">'+
				'<div class="form-group col-md-12">'+
					'<textarea type="textarea" style="width: 100%;height: 150px;" class="form-control" id="descripcion_field" placeholder="Ingresa el codigo del boton" required="">'+info_camp.codigo_pago+'</textarea>'+
				'</div>'+
				'<div class="form-group col-md-6">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+info_camp.tipo+'">'+
					'<button onclick="EC_verificarEdit()" class="btn btn-primary btn-block" type="button">Añadir campo al formulario</button>'+
				'</div>'+
				'<div class="form-group col-md-6">'+
					'<input type="hidden" id="hidden_tipe_field" value="'+info_camp.tipo+'">'+
					'<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>'+
				'</div>'+
			'</div>';
		}

		return validation
}



window.EC_editField=function(info_camp) {

		try{
			$("#ConverCode").html(info_camp);
			var info_campo=$("#ConverCode").html();
			info_campo=info_campo.replace(/&lt;/gi, "<");
			info_campo=info_campo.replace(/&gt;/gi, ">");
			info_camp=JSON.parse(info_campo.substring(1, info_campo.length-1));

		}
		catch(error){
			info_camp=JSON.parse(info_camp);
		}

		const wrapper = document.createElement('div');
		wrapper.innerHTML = EC_swaleditField(info_camp);

		swal({
		  title: "Informacion del campo", 
		  content: wrapper,
		  closeOnClickOutside: false		
		});
		$(".swal-footer").css("display", "none");
	}



window.EC_verificarEdit=function(info_camp, subcampos){

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
				EC_editFieldText(info_camp);
			}

			if ($("#hidden_tipe_field").val()=="email") {
				EC_editFieldEmail(info_camp);
			}
			if ($("#hidden_tipe_field").val()=="date") {
				EC_editFieldDate(info_camp)
			}
			if ($("#hidden_tipe_field").val()=="file") {
				EC_editFieldFile(num)
			}

			if ($("#hidden_tipe_field").val()=="select" || $("#hidden_tipe_field").val()=="multiselect") {
				EC_editFieldSelect(subcampos)
			}
			if ($("#hidden_tipe_field").val()=="pago") {
				EC_editFieldPago(info_camp)
			}

		}
	}


	window.EC_editFieldText=function(){

			window.info_camp.nombre=$("#nombre_field").val();
			window.info_camp.descripcion=$("#descripcion_field").val();
			var Obligatorio;
			if ($('#obli').is(":checked")){
			 window.info_camp.obligatorio=1;
			} else{
			 window.info_camp.obligatorio=0;
			}
			EC_editFin(1)
	}

	window.EC_editFieldEmail=function(){

			window.info_camp.nombre=$("#nombre_field").val();
			window.info_camp.descripcion=$("#descripcion_field").val();
			var Obligatorio;
			if ($('#obli').is(":checked")){
			 window.info_camp.obligatorio=1;
			} else{
			 window.info_camp.obligatorio=0;
			}
			EC_editFin(1)
	}

	window.EC_editFieldDate=function(){

			window.info_camp.nombre=$("#nombre_field").val();
			window.info_camp.descripcion=$("#descripcion_field").val();
			var Obligatorio;
			if ($('#obli').is(":checked")){
			 window.info_camp.obligatorio=1;
			} else{
			 window.info_camp.obligatorio=0;
			}
			EC_editFin(1)
	}


	window.EC_editFieldFile=function(num){

			window.info_camp.nombre=$("#nombre_field").val();
			window.info_camp.descripcion=$("#descripcion_field").val();

			if ($('#obli').is(":checked")){
			 window.info_camp.obligatorio=1;
			} else{
			 window.info_camp.obligatorio=0;
			}
			if ($('#img').is(":checked")){
			 window.info_camp.img=1;
			} else{
			 window.info_camp.img=0;
			}
			if ($('#pdf').is(":checked")){
			 window.info_camp.pdf=1;
			} else{
			 window.info_camp.pdf=0;
			}
			
			EC_editFin(3)
	}

	window.EC_editSelect=function(num){

		$(".select_field_create small").parent().remove();
		var clase, k=0, subcampos={}, val=0;
		for (var i = 0; i < window.NumSelec+1; i++) {
			if (i<2) {
				clase="invalid_create_2";
			} else{
				clase="invalid_create_1";
			}
			$("#sub_field_select_"+i).removeClass("is-invalid");
			if($('#sub_field_select_'+i).val()){
				subcampos[i]=$('#sub_field_select_'+i).val();
				k++;
			} else{
				if($('#sub_field_select_'+i).length){
					val++;
					$("#sub_field_select_"+i).addClass("is-invalid");
	    			$("#sub_field_select_"+i).parent().after('<div class="'+clase+'"><small id="us_error err_part" style="color:red;">Debes llenar este campo, es obligatorio</small><div>');
				}
			}
		}


		if (val==0) {
		 EC_verificarEdit(window.info_camp, subcampos);
		 }
	}

	window.EC_editFieldSelect=function(subcampos){

		window.info_camp.nombre=$("#nombre_field").val();
		window.info_camp.descripcion=$("#descripcion_field").val();
		if ($('#obli').is(":checked")){
		 window.info_camp.obligatorio=1;
		} else{
		 window.info_camp.obligatorio=0;
		}

		window.subcampos=subcampos;
		EC_editFin(2)


	}



	window.EC_editFieldPago=function(num){

		window.info_camp.codigo_pago=$("textarea").val();
		EC_editFin(4)

	}

	window.EC_deleteField=function(info_camp){

		try{
			$("#ConverCode").html(info_camp);
			var info_campo=$("#ConverCode").html();
			info_campo=info_campo.replace(/&lt;/gi, "<");
			info_campo=info_campo.replace(/&gt;/gi, ">");
			window.info_camp=JSON.parse(info_campo.substring(1, info_campo.length-1));

		}
		catch(error){
			window.info_camp=JSON.parse(info_camp);
		}

		console.log(window.info_camp);

		swal({
          title: "Espera!",
          text: "¿Estas seguro de eliminar este campo? Esta accion no se puede revertir",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
          	if (window.info_camp.tipo="multiselect") {
          		$("#div_Formulario_"+window.info_camp.id_formulario+"_Campo_"+window.info_camp.id).hide('slow');
          	}else{
          		$("#Formulario_"+window.info_camp.id_formulario+"_div_"+window.info_camp.id).hide('slow');
          	}
          	$.ajax({
		        type: 'DELETE',
		        url: url+"/formularios/"+window.info_camp.id,
		        success: function(result){
		        	console.log(result)
		        }
		    });

            }
        });


	}


	window.EC_deleteForm=function(info_form){

		window.info_form=JSON.parse(info_form);

		swal({
          title: "Espera!",
          text: "¿Estas seguro de eliminar este formulario? Esta accion no se puede revertir",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
          	// $("#card_"+window.info_form.id).hide('slow');
          	  $.ajax({
			        type: 'DELETE',
			        url: url+"/formularios/"+window.info_form.id,
			        data: window.info_form,
			        success: function(result){
			        	console.log(result)
			        }
			    });

			}
        });

	}


	window.EC_create_field_select=function(){

	window.NumSelec++;
	$("#div_base_select").append('<div style="display: none" class="form-group col-md-12" id="sub_field_select_content'+window.NumSelec+'">'+
									'<div style="display: flex">'+
										'<input type="text" class="form-control" id="sub_field_select_'+window.NumSelec+'" placeholder="Descripcion del campo" required="">'+
										'<button onclick="EC_remove_field_select(sub_field_select_content'+window.NumSelec+','+window.NumSelec+')" type="button" class="btn btn-sm btn-danger mr-1">Eliminar</button>'+
									'</div>'+
								 '</div>');

	$('#sub_field_select_content'+window.NumSelec).insertBefore('#div_base_select').show('slow');
	$('.select_field_create').animate({
	    scrollTop: $('#sub_field_select_content'+window.NumSelec).offset().top - $('.select_field_create').offset().top + $('.select_field_create').scrollTop()
	});
}

window.EC_remove_field_select=function(id, num_select) {

	$('#'+id.id).hide('slow', function(){ 
		$('#'+id.id).remove(); 
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



window.EC_editFin=function(tipo){

	$("#delete_at_edit").fadeOut(250);
	$("#edit_at_edit").fadeOut(250, function () {
	  $(".upd_participante_loading").fadeIn(250);
	});

	$.ajax({
        type: 'PUT',
        url: url+"/formularios/"+window.info_camp.id,
        data: RecopDat(tipo),
        success: function(result){
        	 EC_editFrontFin(result)
        }
    });

}


window.EC_editFrontFin=function(campo){

	$(".upd_participante_loading").fadeOut(250, function () {
	  $("#delete_at_edit").fadeIn(250);
	  $("#edit_at_edit").fadeIn(250);
	});
	swal.close();

	swal("Listo!", "Hemos editado el campo exitosamente", "success");

	if (campo.tipo=="text" || campo.tipo=="email" || campo.tipo=="date") {
		$("#Formulario_"+campo.id_formulario+"_Campo_"+campo.id+"").attr("placeholder", campo.descripcion);
		$("#btn_Formulario_"+campo.id_formulario+"_Campo_"+campo.id+"").attr("onclick", "EC_editField("+"'"+JSON.stringify(campo)+"'"+")");
	}

	if (campo.tipo=="select") {

		$("#btn_Formulario_"+campo.id_formulario+"_Campo_"+campo.id).attr("onclick", "EC_editField("+"'"+JSON.stringify(campo)+"'"+")");
		$("#Formulario_"+campo.id_formulario+"_Campo_"+campo.id+"").empty();
		$("#Formulario_"+campo.id_formulario+"_Campo_"+campo.id+"").append("<option>"+campo.descripcion+"</option>");
		campo.subcampos.map(function(subcampo){
			$("#Formulario_"+campo.id_formulario+"_Campo_"+campo.id+"").append("<option>"+subcampo.descripcion+"</option>");
		})

	}


	if (campo.tipo=="multiselect") {

		$("#btn_Formulario_"+campo.id_formulario+"_Campo_"+campo.id).attr("onclick", "EC_editField("+"'"+JSON.stringify(campo)+"'"+")");
		$("#div_Formulario_"+campo.id_formulario+"_Campo_"+campo.id+" .multiselect-selected-text").text(campo.descripcion);
		$("#div_Formulario_"+campo.id_formulario+"_Campo_"+campo.id+" div span div ul").empty();
		campo.subcampos.map(function(subcampo){
			$("#div_Formulario_"+campo.id_formulario+"_Campo_"+campo.id+" div span div ul").append('<li>'+
																										'<a tabindex="0">'+
																											'<label class="checkbox" title="Elige una o varias opciones en el ano">'+
																												'<input type="checkbox" value="Elige una o varias opciones en el ano">'+subcampo.descripcion+
																											'</label>'+
																										'</a>'+
																									'</li>');
		})

	}

	if (campo.tipo=="file") {
		$("#btn_Formulario_"+campo.id_formulario+"_Campo_"+campo.id).attr("onclick", "EC_editField("+"'"+JSON.stringify(campo)+"'"+")");
		$("#place_"+campo.id_formulario+"_Campo_"+campo.id).attr("placeholder", campo.descripcion);
	}

	if (campo.tipo=="pago") {
		$("#btn_Formulario_"+campo.id_formulario+"_Campo_"+campo.id).attr("onclick", "EC_editField("+"'"+JSON.stringify(campo)+"'"+")");
	}
}

window.RecopDat=function(tipo){
	if (tipo==1 || tipo==2 || tipo==3) {
		   	var Datos={
		   		id: window.info_camp.id,
		   		tipo: window.info_camp.tipo,
		   		nombre: window.info_camp.nombre,
		   		descripcion: window.info_camp.descripcion,
		   		obligatorio: window.info_camp.obligatorio
		   	};
	   }

	   if (tipo==2) {
		   	Datos.subcampos=(window.info_camp.subcampos);
	   }

	    if (tipo==3) {
		   	Datos.img=(window.info_camp.img);
		   	Datos.pdf=(window.info_camp.pdf);
	   }

	   if (tipo==4) {
		   	var Datos={
		   		id: window.info_camp.id,
		   		tipo: window.info_camp.tipo,
		   		codigo_pago: window.info_camp.codigo_pago
		   	};
	   }
	return Datos;
}