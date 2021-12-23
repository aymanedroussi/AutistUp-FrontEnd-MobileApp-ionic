import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentRdvPageRoutingModule } from './payment-rdv-routing.module';

import { PaymentRdvPage } from './payment-rdv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentRdvPageRoutingModule
  ],
  declarations: [PaymentRdvPage]
})
export class PaymentRdvPageModule {}
