import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AptStaffComponent } from './partials/apt-staff.component';
import { AptFormComponent } from './partials/apt-form.component';
import { AptContactComponent } from './partials/apt-contact.component';
import { PageNotFoundComponent } from './partials/pageNotFoundComponent';


const appRoutes: Routes = [
  { path: 'home', component: AptFormComponent },
  { path: 'staff', component: AptStaffComponent },
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
