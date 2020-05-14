import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InConstructorComponent } from './in-constructor/in-constructor.component';
import { OnInitComponent } from './on-init/on-init.component';
import { HttpClientModule } from '@angular/common/http';
import { PromisesComponent } from './promises/promises.component';

@NgModule({
  declarations: [
    AppComponent,
    InConstructorComponent,
    OnInitComponent,
    PromisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
