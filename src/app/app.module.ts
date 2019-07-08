import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario1Module } from './scenario1/scenario1.module';
import { FormsModule } from '@angular/forms';
import { Scenario2Module } from './scenario2/scenario2.module';
import { Scenario3Module } from './scenario3/scenario3.module';
import { Scenario4Module } from './scenario4/scenario4.module';
import { Scenario5Module } from './scenario5/scenario5.module';
import { Scenario6Module } from './scenario6/scenario6.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Scenario1Module,
    FormsModule,
    Scenario2Module,
    Scenario3Module,
    Scenario4Module,
    Scenario5Module,
    Scenario6Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
