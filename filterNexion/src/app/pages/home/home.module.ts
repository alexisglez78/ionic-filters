import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ReusableFilterComponent } from 'src/app/components/reusable-filter/reusable-filter.component';
import { HomePageRoutingModule } from './home-routing.module';
import { SettingsPage } from 'src/app/components/settings/settings.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,ReusableFilterComponent,SettingsPage]
})
export class HomePageModule {}
