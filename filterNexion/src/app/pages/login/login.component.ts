import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string ="";
  password: string ="";

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso:', response);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error en el inicio de sesión:', error);
      },
    });
  }
}
