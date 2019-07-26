import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PgInformaticaPage } from './pg-informatica.page';

const routes: Routes = [
  {
    path: '',
    component: PgInformaticaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PgInformaticaPage]
})
export class PgInformaticaPageModule {}
