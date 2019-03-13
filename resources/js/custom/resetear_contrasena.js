window.resetearContrasena=function() {

	emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   
    if (emailRegex.test($("#email").val())) {
    	$("#reseteo_contenedor").load(url+"/resetear-contrasena",{email: $("#email").val()})
    }else{
    	swal("Espera!", "Debes introducir una direccion de correo electrinico valida", "warning");
    }
}