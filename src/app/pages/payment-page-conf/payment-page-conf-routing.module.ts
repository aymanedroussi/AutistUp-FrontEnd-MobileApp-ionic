import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentPageConfPage } from './payment-page-conf.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentPageConfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentPageConfPageRoutingModule {}
