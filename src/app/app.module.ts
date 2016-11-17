import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//classes
//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header.component';
import { FooterComponent } from './partials/footer.component';
import { AddApointmentComponent } from './partials/add-appointment.component';
import { AptListComponent  } from './partials/apt-list.component';
import { AptAboutComponent } from './partials/apt-about.component';
import { AptFormComponent } from './partials/apt-form.component';
import { AptContactComponent } from './partials/apt-contact.component';
import { PageNotFoundComponent } from './partials/pageNotFoundComponent';

//Services
import { AptService } from './apt.service';

//Modules
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: 'home', component: AptFormComponent },
  { path: 'about', component: AptAboutComponent },
  { path: 'contact', component: AptContactComponent },
  { path: '', component: AptFormComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddApointmentComponent,
    AptListComponent,
    AptFormComponent,
    AptAboutComponent,
    AptContactComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ AptService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
