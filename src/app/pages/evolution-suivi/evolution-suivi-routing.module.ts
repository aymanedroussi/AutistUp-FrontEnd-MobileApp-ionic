import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvolutionSuiviPage } from './evolution-suivi.page';

const routes: Routes = [
  {
    path: '',
    component: EvolutionSuiviPage
  },
  {
    path: 'evolution',
    loadChildren: () => import('./evolution/evolution.module').then( m => m.EvolutionPageModule)
  },
  {
    path: 'suivi',
    loadChildren: () => import('./suivi/suivi.module').then( m => m.SuiviPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvolutionSuiviPageRoutingModule {}
