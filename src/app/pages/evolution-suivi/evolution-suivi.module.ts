import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvolutionSuiviPageRoutingModule } from './evolution-suivi-routing.module';

import { EvolutionSuiviPage } from './evolution-suivi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvolutionSuiviPageRoutingModule
  ],
  declarations: [EvolutionSuiviPage]
})
export class EvolutionSuiviPageModule {}
