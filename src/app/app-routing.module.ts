import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, ContactComponent, HomeComponent, NotFoundComponent, ProjectComponent } from 'pages';

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
    path: 'project',
    component: ProjectComponent
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
  declarations: [AboutComponent, ContactComponent, HomeComponent, NotFoundComponent, ProjectComponent]
})
export class AppRoutingModule {}
