window.login=function(e){
	var email = $("#email").val();
	var pass = $("#pass").val();
	emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if (emailRegex.test(email)) {
    	if (pass=="") {
    		swal("Espera!", "Debes introducir Contraseña valida", "warning");
    	} else{
    		$( ".login100-form-btn" ).fadeOut("slow", function () {
    			$( ".login_loading" ).fadeIn("slow");
    		});
    		$("#login_contenedor").load(url+"/login", {Email: email, Pass: pass});
    	}
    } else{
    	swal("Error", "Debes introducir una direccion de correo electronico valida", "warning");
    }
}

window.login_MostrarBoton = function () {
	$( ".login_loading" ).fadeOut("slow", function () {
    	$( ".login100-form-btn" ).fadeIn("slow");
    });
}