import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('access_token'); // O el nombre de la clave que usas
    if (token) {
      return true; // Permitir acceso a la ruta
    } else {
      this.router.navigate(['/login']); // Redirigir al login si no hay token
      return false;
    }
  }
}
