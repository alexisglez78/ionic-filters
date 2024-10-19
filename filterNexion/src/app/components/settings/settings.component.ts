// src/app/pages/settings/settings.page.ts
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

/**
 * Componente para la página de configuración, donde los usuarios pueden cambiar el tema de la aplicación.
 */
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsPage {
  /**
   * Indica si el modo oscuro está habilitado.
   * @type {boolean}
   */
  isDarkMode: boolean;

  /**
   * Crea una instancia de SettingsPage.
   * @param appComponent - Instancia de AppComponent utilizada para cambiar el tema.
   */
  constructor(private appComponent: AppComponent) {
    // Inicializa el estado del modo oscuro basado en el valor almacenado en localStorage.
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
  }

  /**
   * Maneja el evento de cambio del tema.
   * @param event - Evento que contiene el nuevo estado del interruptor de tema.
   */
  onThemeToggle(event: any) {
    this.isDarkMode = event.detail.checked; // Actualiza el estado del modo oscuro
    this.appComponent.switchTheme(this.isDarkMode); // Llama al método en AppComponent para cambiar el tema
  }
}
