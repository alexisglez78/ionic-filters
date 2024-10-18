// src/app/pages/settings/settings.page.ts
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsPage {
  isDarkMode: boolean;

  constructor(private appComponent: AppComponent) {
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
  }

  onThemeToggle(event: any) {
    this.isDarkMode = event.detail.checked;
    this.appComponent.switchTheme(this.isDarkMode);
  }
}
