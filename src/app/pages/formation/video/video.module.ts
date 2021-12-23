import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoPageRoutingModule } from './video-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { VideoPage } from './video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [VideoPage]
})
export class VideoPageModule {}
