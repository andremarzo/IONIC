import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PgEletronicaPage } from './pg-eletronica.page';

const routes: Routes = [
  {
    path: '',
    component: PgEletronicaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PgEletronicaPage]
})
export class PgEletronicaPageModule {}
