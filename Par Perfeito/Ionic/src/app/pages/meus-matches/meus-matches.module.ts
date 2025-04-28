import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusMatchesPageRoutingModule } from './meus-matches-routing.module';

import { MeusMatchesPage } from './meus-matches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusMatchesPageRoutingModule
  ],
  declarations: [MeusMatchesPage]
})
export class MeusMatchesPageModule {}
