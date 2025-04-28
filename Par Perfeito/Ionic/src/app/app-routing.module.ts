import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./pages/cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'meus-dados',
    loadChildren: () => import('./pages/meus-dados/meus-dados.module').then( m => m.MeusDadosPageModule)
  },
  // {
  //   path: 'usuarios',
  //   loadChildren: () => import('./pages/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  // },
  {
    path: 'meus-matches',
    loadChildren: () => import('./pages/meus-matches/meus-matches.module').then( m => m.MeusMatchesPageModule)
  },
  {
    path: 'caracteristicas',
    loadChildren: () => import('./pages/caracteristicas/caracteristicas.module').then( m => m.CaracteristicasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
