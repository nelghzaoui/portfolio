import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import * as COMPONENTS from 'components';

@NgModule({
  declarations: [AppComponent, AppModule.COMPONENTS],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static COMPONENTS = [
    COMPONENTS.AboutComponent,
    COMPONENTS.ContactComponent,
    COMPONENTS.HomeComponent,
    COMPONENTS.ProjectComponent,
    COMPONENTS.SkillComponent
  ];
}
