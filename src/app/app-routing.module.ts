import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AboutComponent,
  ContactComponent,
  HomeComponent,
  NotFoundComponent,
  ProjectComponent,
  SkillComponent
} from 'pages';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'projects',
    component: ProjectComponent
  },
  {
    path: 'skills',
    component: SkillComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  /* MAPS / SKILLS */
];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  declarations: [AboutComponent, ContactComponent, HomeComponent, NotFoundComponent, ProjectComponent, SkillComponent]
})
export class AppRoutingModule {}
