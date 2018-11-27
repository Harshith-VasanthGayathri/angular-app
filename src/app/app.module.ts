import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavTabComponent } from './nav-tab/nav-tab.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './/app-routing.module';
import { AddReviewComponent } from './add-review/add-review.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavTabComponent,
    AddReviewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
