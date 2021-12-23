import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleVideoPage } from './article-video.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleVideoPageRoutingModule {}
