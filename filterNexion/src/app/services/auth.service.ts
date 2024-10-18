import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-api-url.com/api'; // Cambia esto por tu URL API

  constructor(private http: HttpClient) {}

  login(data:FormData): Observable<any> {
    // return this.http.post<any>(`${this.apiUrl}/login`, { data });
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InBhdWwgYWxleGlzIiwiaWF0IjoxNTE2MjM5MDIyfQ.gxggtmJNAj_S7AinzHnBVax_DF1Fx8Fvrjb679NGu9M";

    // Retornar un Observable con el token
    return of({ token });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    const token = this.getToken();
    return !!token; // Devuelve true si hay un token
  }

  logout() {
    localStorage.removeItem('token');
  }
}
