import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPageConfPageRoutingModule } from './payment-page-conf-routing.module';

import { PaymentPageConfPage } from './payment-page-conf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPageConfPageRoutingModule
  ],
  declarations: [PaymentPageConfPage]
})
export class PaymentPageConfPageModule {}
