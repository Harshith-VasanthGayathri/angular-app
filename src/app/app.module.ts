import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavTabComponent } from './nav-tab/nav-tab.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './/app-routing.module';
import { AddReviewComponent } from './add-review/add-review.component';
import { HomeComponent } from './home/home.component';
import { ShowReviewComponent } from './show-review/show-review.component';
import { ReviewDataService } from './services/review-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavTabComponent,
    AddReviewComponent,
    HomeComponent,
    ShowReviewComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [ReviewDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
