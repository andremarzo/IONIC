import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule,FormControl  } from '@angular/forms';

import { PgCadastroClientePage } from './pg-cadastro-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: PgCadastroClientePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormControl,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PgCadastroClientePage]
})
export class PgCadastroClientePageModule {}
