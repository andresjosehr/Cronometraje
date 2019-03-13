window.onload=function () {
	var parts = window.location.pathname.split('/');
	var urlPath = parts.pop() || parts.pop();  // handle potential trailing slash

	if (urlPath=="panel-de-control") {
		$(".sidebar_panel").addClass("active");
	}
	if (urlPath=="perfil") {
		$(".sidebar_perfil").addClass("active");
	}
	$(".pp-intro-bar").remove();
}