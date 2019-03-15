
	@include("login.header");

    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="{{ asset('public/img/login/img-01.png') }}" alt="IMG">
				</div>
				
				<div id="reseteo_contenedor"></div>
				<div class="login100-form validate-form">
					<span class="login100-form-title">
						Introduce tu nueva contraseña
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="password" id="pass1" placeholder="Contraseña">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>					
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="password" id="pass2" placeholder="Repite la contraseña">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					<div class="container-login100-form-btn">
						<button onclick="resetearContrasenaFinal('{{$info->codigo}}', '{{$info->id_usuario}}');" class="login100-form-btn">
							Resetear Contraseña
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