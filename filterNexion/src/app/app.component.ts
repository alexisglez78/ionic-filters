// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    const savedTheme = localStorage.getItem('darkMode');
    console.log("savedTheme",savedTheme);
    if (savedTheme) {
      this.toggleDarkTheme(savedTheme === 'true');
    } else {
      // Si no hay preferencia, sigue la preferencia del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: light)');
      this.toggleDarkTheme(prefersDark.matches);

      console.log(prefersDark);
    }
  }


  toggleDarkTheme(shouldAdd: boolean) {
    document.body.setAttribute('data-theme', shouldAdd ? 'dark' : 'light');
  }

  // Llamar a esta función cuando el usuario elija manualmente el tema
  switchTheme(isDarkMode: boolean) {
    this.toggleDarkTheme(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
  }
}
