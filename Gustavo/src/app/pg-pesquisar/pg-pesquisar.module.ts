import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PgPesquisarPage } from './pg-pesquisar.page';

const routes: Routes = [
  {
    path: '',
    component: PgPesquisarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PgPesquisarPage]
})
export class PgPesquisarPageModule {}
