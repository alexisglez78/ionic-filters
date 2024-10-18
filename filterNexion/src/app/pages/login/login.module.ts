// src/app/pages/login/login.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module'; // Importa el routing module

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRoutingModule // Añade el LoginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
