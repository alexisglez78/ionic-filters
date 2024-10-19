import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { SettingsPage } from 'src/app/components/settings/settings.component';
import { FilterModalComponent } from 'src/app/components/filter-modal/filter-modal.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,SettingsPage,FilterModalComponent]
})
export class HomePageModule {}
