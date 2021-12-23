import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreGetPage } from './centre-get.page';

const routes: Routes = [
  {
    path: '',
    component: CentreGetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreGetPageRoutingModule {}
