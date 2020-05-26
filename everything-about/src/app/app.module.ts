import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VirtualScrollTestComponent } from './components/test/virtual-scroll-test/virtual-scroll-test.component';
import { MaterialImportsModule } from './features/imports/material-imports/material-imports.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    VirtualScrollTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
