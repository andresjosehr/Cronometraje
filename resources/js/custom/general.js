$(document).ready(function() {
	var parts = window.location.pathname.split('/');
	var urlPath = parts.pop() || parts.pop();  // handle potential trailing slash

	if (urlPath=="panel-de-control") {
		$(".sidebar_panel").addClass("active");
	}
	if (urlPath=="perfil") {
		$(".sidebar_perfil").addClass("active");
	}

	if (urlPath=="registrar-admin") {
		$(".sidebar_registrar_admin").addClass("active");
	}
	if (urlPath=="participantes" || urlPath=="1") {
		$(".sidebar_participantes").addClass("active");
	}
	if (urlPath=="formularios") {
		$(".sidebar_formularios").addClass("active");
	}

	if (urlPath=="eventos" || urlPath=="2") {
		$(".sidebar_eventos").addClass("active");
	}

	if (urlPath=="informes") {
		$(".sidebar_informes").addClass("active");
	}


	$(".pp-intro-bar").remove();
	});