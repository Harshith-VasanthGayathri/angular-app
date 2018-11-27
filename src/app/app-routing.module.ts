import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router'
import {AddReviewComponent} from './add-review/add-review.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'addReview',
    component: AddReviewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
