import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as COMPONENTS from 'components';

@NgModule({
  declarations: [AppComponent, AppModule.COMPONENTS],
  imports: [BrowserModule, AppRoutingModule, ScullyLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  private static COMPONENTS = [
    COMPONENTS.AboutComponent,
    COMPONENTS.ContactComponent,
    COMPONENTS.HomeComponent,
    COMPONENTS.ProjectComponent,
    COMPONENTS.SkillsComponent,
    COMPONENTS.SkillsProgressBarComponent
  ];
}
