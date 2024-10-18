// src/app/pages/home/home.page.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  isDarkMode: boolean;

  constructor() {
    // Inicializar el estado del tema según la preferencia almacenada
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
  }

  onThemeToggle(event: any) {
    this.isDarkMode = event.detail.checked;
    this.toggleDarkTheme(this.isDarkMode);
  }

  toggleDarkTheme(isDark: boolean) {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
  }
}
