import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Composant1Component } from './composant1/composant1.component';
import { Composant2Component } from './composant2/composant2.component';

@NgModule({
  declarations: [
    AppComponent,
    Composant1Component,
    Composant2Component
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
