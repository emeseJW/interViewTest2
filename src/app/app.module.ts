import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentInMYLIFEComponent } from './my-first-component-in-mylife/my-first-component-in-mylife.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentInMYLIFEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
