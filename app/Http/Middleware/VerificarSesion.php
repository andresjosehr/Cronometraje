<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class VerificarSesion
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $Usuario = Auth::user();

        if (!session()->get('sesion')) {
            return redirect("login");
        }
        return $next($request);
    }
}
