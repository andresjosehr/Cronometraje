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
	if (urlPath=="participantes") {
		$(".sidebar_participantes").addClass("active");
	}
	$(".pp-intro-bar").remove();
	});