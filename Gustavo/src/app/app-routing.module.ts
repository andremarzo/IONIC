import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'pg-eletrica', loadChildren: './pg-eletrica/pg-eletrica.module#PgEletricaPageModule' },
  { path: 'pg-eletronica', loadChildren: './pg-eletronica/pg-eletronica.module#PgEletronicaPageModule' },
  { path: 'pg-informatica', loadChildren: './pg-informatica/pg-informatica.module#PgInformaticaPageModule' },
  { path: 'pg-pesquisar', loadChildren: './pg-pesquisar/pg-pesquisar.module#PgPesquisarPageModule' },
  { path: 'pg-login', loadChildren: './pg-login/pg-login.module#PgLoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
