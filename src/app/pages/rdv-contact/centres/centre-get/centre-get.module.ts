import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreGetPageRoutingModule } from './centre-get-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CentreGetPage } from './centre-get.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreGetPageRoutingModule,Ng2SearchPipeModule
  ],
  declarations: [CentreGetPage]
})
export class CentreGetPageModule {}
