import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RdvContactPageRoutingModule } from './rdv-contact-routing.module';

import { RdvContactPage } from './rdv-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RdvContactPageRoutingModule
  ],
  declarations: [RdvContactPage]
})
export class RdvContactPageModule {}
