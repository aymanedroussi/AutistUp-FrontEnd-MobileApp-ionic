import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentRdvPage } from './payment-rdv.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentRdvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRdvPageRoutingModule {}
