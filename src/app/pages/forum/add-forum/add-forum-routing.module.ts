import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddForumPage } from './add-forum.page';

const routes: Routes = [
  {
    path: '',
    component: AddForumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddForumPageRoutingModule {}
