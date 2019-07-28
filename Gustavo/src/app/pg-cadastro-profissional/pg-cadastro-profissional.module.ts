import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PgCadastroProfissionalPage } from './pg-cadastro-profissional.page';

const routes: Routes = [
  {
    path: '',
    component: PgCadastroProfissionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PgCadastroProfissionalPage]
})
export class PgCadastroProfissionalPageModule {}
