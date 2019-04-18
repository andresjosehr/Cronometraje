window.EditarUsuario=function() {

	$("#us_error").remove();
	$("#nombre").removeClass("is-invalid");
	$("#dni").removeClass("is-invalid");
	$("#email").removeClass("is-invalid");

	var validado=0;
	if ($("#nombre").val()=="") {
		$("#nombre").addClass("is-invalid");
		$("#nombre").after('<small id="us_error" style="color:red;">Debes introducir un nombre</small>');
		validado++;
	}

	if ($("#dni").val()=="") {
			$("#dni").addClass("is-invalid");
			$("#dni").after('<small id="us_error" style="color:red;">Debes introducir tu dni</small>');
			validado++;
	}	

	if ($("#email").val()=="") {
			$("#email").addClass("is-invalid");
			$("#email").after('<small id="us_error" style="color:red;">Debes introducir un email</small>');
			validado++;
	}

	emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if (emailRegex.test($("#email").val())) {
    } else{
    	$("#email").addClass("is-invalid");
		$("#email").after('<small id="us_error" style="color:red;">Debes introducir un email valido</small>');
		validado++;
    }

    if (validado==0) {
    	$( ".edit_us_btn" ).fadeOut(250, function () {
	    	$( ".perfil_loading" ).fadeIn(250);
	    });
    	$("#perfil_edit").load(url+"/editar_perfil",{
    		nombre: $("#nombre").val(),
    		dni: $("#dni").val(),
    		email: $("#email").val(),
    		direccion: $("#direccion").val(),
    		ciudad: $("#ciudad").val(),
    		estado: $("#estado").val(),
    		codigo_postal: $("#codigo_postal").val(),
    	})
    }
};

window.CambiarContraseña= function () {

	$("#con_error").remove();
	$("#pass1").removeClass("is-invalid");
	$("#pass2").removeClass("is-invalid");

	var pass=$("#pass1").val();
	if ($("#pass1").val()!=$("#pass2").val()) {
		 $("#pass1").addClass("is-invalid");
	      $("#pass2").addClass("is-invalid");
		  $("#campos_contra").after('<small id="con_error" style="color:red;">Las contraseñas no coinciden</small>');
	} else{
		
	    if (pass.length>6) {
	    	$( ".contra_btn" ).fadeOut(250, function () {
		    	$( ".contra_loading" ).fadeIn(250);
		    });
		      $("#perfil_edit").load(url+"/editar_contrasena",{
	    		password: pass
	    	});
	    } else {
	      $("#pass1").addClass("is-invalid");
	      $("#pass2").addClass("is-invalid");
		  $("#campos_contra").after('<small id="con_error" style="color:red;">La contraseña debe tener mas de 6 caracteres</small>');
	    }
	}
}


window.reg_admin_send=function(id){

	$(".reg_btn_1").hide("slow", function(){
		$(".loading_admin1").show("slow");
	})

	Data=JSON.parse(id);
	$.ajax({
        type: 'POST',
        url: url+"/reg_admin_send",
        data: Data,
        success: function(msg){
        	if (msg) {
        		$(".loading_admin1").hide("slow", function(){
					$(".reg_btn_1").show("slow");
				})
        		swal("Listo!", "Hemos enviado el email al usuario a registrar exitosamente", "success");
        	} else{
        		console.log("Error");
        	}
        }
    });

}


window.reg_admin_delete=function(id){

	$("#user_temp"+id).hide("slow", function(){
		$("#user_temp"+id).remove();
		swal("Listo!", "Usuario eliminado exitosamente", "success");
	})

	$.ajax({
        type: 'POST',
        url: url+"/reg_admin_delete",
        data: {
        	id: id,
        },
        success: function(msg){
        	if (msg) {
        		$(".loading_admin1").hide("slow", function(){
					$(".reg_btn_1").show("slow");
				})
        		swal("Listo!", "Hemos enviado el email al usuario a registrar exitosamente", "success");
        	} else{
        		console.log("Error");
        	}
        }
    });
}