import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  screen: any = 'signin'; // Almacena el estado actual de la pantalla (iniciar sesión o registro)
  formData: FormGroup; // Grupo de formulario que contiene los controles de entrada
  isLoading: boolean = false; // Indica si se está procesando el inicio de sesión

  /**
   * Crea una instancia de LoginComponent.
   *
   * @param fb - FormBuilder para construir formularios reactivos.
   * @param auth - Servicio de autenticación para manejar el inicio de sesión.
   * @param router - Router para navegar entre diferentes rutas.
   */
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    // Inicializa el formulario con validaciones
    this.formData = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Control para el email con validaciones
      password: ['', [Validators.required]], // Control para la contraseña con validaciones
    });
  }

  ngOnInit() {}

  /**
   * Cambia la pantalla actual entre inicio de sesión y registro.
   *
   * @param event - Evento que contiene la nueva pantalla a mostrar.
   */
  change(event: any) {
    this.screen = event; // Actualiza el estado de la pantalla
  }

  /**
   * Intenta iniciar sesión con las credenciales proporcionadas.
   *
   * Si el formulario es válido, llama al servicio de autenticación y navega a la página de inicio.
   */
  login() {
    var formData: any = new FormData(); // Crea un objeto FormData para enviar al servidor

    if (this.formData.valid) {
      this.isLoading = true; // Cambia el estado de carga a verdadero
      formData.append('email', this.formData.get('email')?.value); // Agrega el email al FormData
      formData.append('password', this.formData.get('password')?.value); // Agrega la contraseña al FormData

      this.auth.login(formData).subscribe((data: any) => {
        this.auth.saveToken(data.token); // Guarda el token en el almacenamiento local
        this.router.navigate(['/home']); // Navega a la página de inicio
      });
    }
  }
}
