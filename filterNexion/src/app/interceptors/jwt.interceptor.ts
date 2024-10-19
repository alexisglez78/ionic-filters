import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

/**
 * Interceptor HTTP para añadir el token JWT a las solicitudes salientes.
 */
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  /**
   * Crea una instancia de JwtInterceptor.
   * @param authService - Servicio de autenticación para obtener el token JWT.
   */
  constructor(private authService: AuthService) {}

  /**
   * Intercepta una solicitud HTTP y añade el token de autorización si está disponible.
   * @param request - La solicitud HTTP a interceptar.
   * @param next - El manejador de la solicitud siguiente.
   * @returns Un Observable con el evento HTTP.
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
