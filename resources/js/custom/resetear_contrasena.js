window.resetearContrasena=function() {

	emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   
    if (emailRegex.test($("#email").val())) {
    	$( ".login100-form-btn" ).fadeOut(250, function () {
    		$( ".login_loading" ).fadeIn(250);
    	});
    	$("#reseteo_contenedor").load(url+"/resetear-contrasena",{email: $("#email").val()})
    }else{
    	swal("Espera!", "Debes introducir una direccion de correo electrinico valida", "warning");
    }
}

window.resetearContrasenaFinal=function(codigo_, id_usuario) {
	if ($("#pass1").val()!=$("#pass2").val()) {
		swal("Error", "Las contraseñas no coinciden", "warning")
	} else{
			if ($("#pass1").val().length<6) {
				swal("Error", "La contraseña debe tener una longitud mayor de 6 caracteres", "warning")
			} else{
				$( ".login100-form-btn" ).fadeOut(250, function () {
		    		$( ".login_loading" ).fadeIn(250);
		    	});
		    	$("#reseteo_contenedor").load(url+"/resetear-contrasena/"+codigo_,{
		    		email: $("#email").val(),
		    		password: $("#pass1").val(),
		    		id: id_usuario
		    	})
			}
	}
}