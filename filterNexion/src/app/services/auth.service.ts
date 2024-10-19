import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-api-url.com/api'; // Cambia esto por tu URL API

  constructor(private http: HttpClient) {}

  /**
   * Inicia sesión enviando los datos del usuario a la API.
   *
   * @param data Los datos del formulario de inicio de sesión.
   * @returns Un Observable que contiene el token de autenticación.
   */
  login(data: FormData): Observable<any> {
    // return this.http.post<any>(`${this.apiUrl}/login`, { data });
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InBhdWwgYWxleGlzIiwiaWF0IjoxNTE2MjM5MDIyfQ.gxggtmJNAj_S7AinzHnBVax_DF1Fx8Fvrjb679NGu9M";

    // Retornar un Observable con el token simulado
    return of({ token });
  }

  /**
   * Guarda el token de autenticación en el almacenamiento local del navegador.
   *
   * @param token El token de autenticación que se guardará.
   */
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  /**
   * Obtiene el token almacenado del almacenamiento local.
   *
   * @returns El token de autenticación o null si no se encuentra.
   */
  getToken() {
    return localStorage.getItem('token');
  }

  /**
   * Verifica si el usuario está autenticado revisando si existe un token.
   *
   * @returns `true` si hay un token almacenado, `false` en caso contrario.
   */
  isLoggedIn() {
    const token = this.getToken();
    return !!token; // Devuelve true si hay un token
  }

  /**
   * Cierra la sesión del usuario eliminando el token del almacenamiento local.
   */
  logout() {
    localStorage.removeItem('token');
  }
}
