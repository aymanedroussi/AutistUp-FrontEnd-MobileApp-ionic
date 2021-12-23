import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleVideoPageRoutingModule } from './article-video-routing.module';

import { ArticleVideoPage } from './article-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleVideoPageRoutingModule
  ],
  declarations: [ArticleVideoPage]
})
export class ArticleVideoPageModule {}
