import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from 'shared';

@NgModule({
  declarations: [AppModule.COMPONENTS],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static COMPONENTS = [AppComponent, NavbarComponent];
}
