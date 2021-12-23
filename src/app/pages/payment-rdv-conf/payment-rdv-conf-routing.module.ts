import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentRdvConfPage } from './payment-rdv-conf.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentRdvConfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRdvConfPageRoutingModule {}
