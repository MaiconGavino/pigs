import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurralPage } from './curral.page';

const routes: Routes = [
  {
    path: '',
    component: CurralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurralPageRoutingModule {}
