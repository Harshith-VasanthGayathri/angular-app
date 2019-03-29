import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router'
import {AddReviewComponent} from './add-review/add-review.component'
import { HomeComponent } from './home/home.component';
import { ShowReviewComponent } from './show-review/show-review.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'addReview',
    component: AddReviewComponent
  },
  {
    path: 'showReview',
    component: ShowReviewComponent
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
