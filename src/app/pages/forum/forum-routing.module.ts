import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumPage } from './forum.page';

const routes: Routes = [
  {
    path: '',
    component: ForumPage
  },
  {
    path: 'question',
    loadChildren: () => import('./question/question.module').then( m => m.QuestionPageModule)
  },
  {
    path: 'add-forum',
    loadChildren: () => import('./add-forum/add-forum.module').then( m => m.AddForumPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumPageRoutingModule {}
