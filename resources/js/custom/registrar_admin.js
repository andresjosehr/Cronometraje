window.registrarAdmin=function(){

	$('#email_admin, #rol, #usuario_padre').removeClass("is-invalid");
    $('#invalid-feedback').remove();
	 
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   
    if (!emailRegex.test($("#email_admin").val())) {
    		$('#email_admin').addClass("is-invalid");
     		$('#email_admin').after('<small id="invalid-feedback" style="color:red;">Debes ingresar un email valido</small>');
    	} else {
    		if ($("#rol").val()==0) {
    			$('#rol').addClass("is-invalid");
                $('#rol').after('<small id="invalid-feedback" style="color:red;">Debes elegir un rol para el administrador</small>');
    		} else{
                if ($("#rol").val()==3 && $("#usuario_padre").val()==0) {
                    $('#usuario_padre').addClass("is-invalid");
                    $('#usuario_padre').after('<small id="invalid-feedback" style="color:red;">Debes elegir un un usuario padre para el loader</small>');
                } else{
                    $( ".reg_admin_btn" ).fadeOut(250, function () {
                        $( ".loading_admin" ).fadeIn(250);
                    });

                    if ($("#rol").val()!=3) {
                        $("#registrar_admin_contenedor").load(url+"/registrar-admin", {
                            email: $("#email_admin").val(),
                            rol: $("#rol").val()
                        });
                    } else{
                        $("#registrar_admin_contenedor").load(url+"/registrar-admin", {
                            email: $("#email_admin").val(),
                            usuario_padre: $("#usuario_padre").val(),
                            rol: $("#rol").val()
                        });
                    }
                }
    		}
    	}

}


window.registrarAdminFinal=function(data){

	 if ($("#password").val()!="" || $("#password2").val()!="") {
        if ($("#nombre").val()=="") { 
            swal("Error", "Debes introducir un nombre valido", "warning");
        } else{
             if ($("#password").val()!=$("#password2").val()) {
                swal("Error", "Las contraseñas no coinciden", "warning");
             }else{
                if ($("#password").val().length<6) {
                    swal("Error", "La contraseña debe tener una longitud minima de 6 caracteres", "warning");
                } else{
                    $( ".login100-form-btn" ).fadeOut(250, function () {
                            $( ".login_loading" ).fadeIn(250);
                        });

                    data = JSON.parse('['+data+']')
                     $("#registro_contenedor").load(url+"/registrar-admin/"+data[0][0]["codigo"],{
                        nombre: $("#nombre").val(),
                        email: data[0][0]["email"],
                        password: $("#password").val(),
                        rol: data[0][0]["rol"],
                        direccion: $("#direccion").val(),
                        ciudad: $("#ciudad").val(),
                        estado: $("#estado").val(),
                        codigo_postal: $("#codigo_postal").val(),
                     })
                }
             }
        }
    } else{
        swal("Error", "Debes introducir las contraseñas correctamente", "warning");
        
    }


                

}