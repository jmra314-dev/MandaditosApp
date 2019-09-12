import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
import {MapUbicationPage} from '../map-ubication/map-ubication.page'

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  },
  {
    path: '',
    component: MapUbicationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterPage,MapUbicationPage]
})
export class RegisterPageModule {}
