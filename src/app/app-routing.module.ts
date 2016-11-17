import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AptAboutComponent } from './partials/apt-about.component';
import { AptFormComponent } from './partials/apt-form.component';
import { AptContactComponent } from './partials/apt-contact.component';
import { PageNotFoundComponent } from './partials/pageNotFoundComponent';


const appRoutes: Routes = [
  { path: 'home', component: AptFormComponent },
  { path: 'about', component: AptAboutComponent },
  { path: 'contact', component: AptContactComponent },
  { path: '', component: AptFormComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
