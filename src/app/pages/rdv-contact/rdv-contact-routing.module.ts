import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RdvContactPage } from './rdv-contact.page';

const routes: Routes = [
  {
    path: '',
    component: RdvContactPage
  },
  {
    path: 'rdv',
    loadChildren: () => import('./rdv/rdv.module').then( m => m.RdvPageModule)
  },
  {
    path: 'centres',
    loadChildren: () => import('./centres/centres.module').then( m => m.CentresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdvContactPageRoutingModule {}
