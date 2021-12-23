import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddForumPageRoutingModule } from './add-forum-routing.module';

import { AddForumPage } from './add-forum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddForumPageRoutingModule
  ],
  declarations: [AddForumPage]
})
export class AddForumPageModule {}
