import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

//import { MapUbicationPage } from './map-ubication.page';

const routes: Routes = [
  {
    path: '',
   // component: MapUbicationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
 // declarations: [MapUbicationPage]
})
export class MapUbicationPageModule {}
