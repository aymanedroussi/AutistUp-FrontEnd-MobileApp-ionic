import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentRdvConfPageRoutingModule } from './payment-rdv-conf-routing.module';

import { PaymentRdvConfPage } from './payment-rdv-conf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentRdvConfPageRoutingModule
  ],
  declarations: [PaymentRdvConfPage]
})
export class PaymentRdvConfPageModule {}
