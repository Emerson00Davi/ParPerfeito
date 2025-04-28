import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusMatchesPage } from './meus-matches.page';

const routes: Routes = [
  {
    path: '',
    component: MeusMatchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusMatchesPageRoutingModule {}
