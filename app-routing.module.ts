import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page4Component } from './page4/page4.component';
import { Page1Component } from './page1/page1.component';

const routes: Routes = [
  {
    path:'',redirectTo:"page1",pathMatch:"full"
  },
  {
    path:'page1',component:Page1Component
  },
  {
    path:'nextpage',component:Page4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
