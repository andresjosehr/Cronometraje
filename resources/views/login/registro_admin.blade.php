
	@include("login.header");

    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<span class="login100-form-title">
						Registro de Administrador
					</span>
				<div id="registro_contenedor"></div>
				<div class="login100-form validate-form reg_login100-form">

					<div class="wrap-input100 validate-input">
					<input class="input100" type="text" id="nombre" placeholder="Nombres">
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>					
					<div class="wrap-input100 validate-input" >
						<input class="input100" type="password" id="password" placeholder="contraseña">
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					<div class="wrap-input100 validate-input" >
						<input class="input100" type="password" id="password2" placeholder="Repite la contraseña">
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					<div class="wrap-input100 validate-input" >
						<input class="input100" type="text" id="direccion" placeholder="Direccion (Opcional)">
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					<div class="wrap-input100 validate-input" >
						<input class="input100" type="password" id="ciudad" placeholder="Ciudad (Opcional)">
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					<div class="wrap-input100 validate-input" >
						<input class="input100" type="password" id="estado" placeholder="Estado (Opcional)">
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					<div class="wrap-input100 validate-input" >
						<input class="input100" type="password" id="codigo_postal" placeholder="Codigo Postal (Opcional)">
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					<div class="container-login100-form-btn">
						<button onclick="registrarAdminFinal('{{$data}}');" class="login100-form-btn">
							Completar Registro
						</button>
						<div class="login_loading loading"></div>
					</div>

					<div class="text-center p-t-12">
						<a class="txt2" href="login">
							Volver
						</a>
					</div>

					<div class="text-center p-t-136">
						<a class="txt2" href="resetear-contrasena">
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	@include("login.footer");