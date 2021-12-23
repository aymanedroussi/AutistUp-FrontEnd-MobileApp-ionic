import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentresPageRoutingModule } from './centres-routing.module';

import { CentresPage } from './centres.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentresPageRoutingModule,Ng2SearchPipeModule
  ],
  declarations: [CentresPage]
})
export class CentresPageModule {}
