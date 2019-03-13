
	@include("login.header");

    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="{{ asset('public/img/login/img-01.png') }}" alt="IMG">
				</div>
				
				<div id="login_contenedor"></div>
				<div class="login100-form validate-form">
					<span class="login100-form-title">
						Ingreso de miembros
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" id="email" placeholder="Email">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" id="pass" placeholder="Contraseña">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button onclick="login();" class="login100-form-btn">
							Ingresar
						</button>
						<div class="login_loading loading"></div>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							Olvidaste tu
						</span>
						<a class="txt2" href="resetear-contrasena">
							constraseña?
						</a>
					</div>

					<div class="text-center p-t-136">
						<a class="txt2" href="#">
							Crea tu cuenta
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	@include("login.footer");