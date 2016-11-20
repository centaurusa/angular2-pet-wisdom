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
import { AptFormComponent } from './partials/apt-form.component';
import { AptContactComponent } from './partials/apt-contact.component';
import { PageNotFoundComponent } from './partials/pageNotFoundComponent';
import { AptStaffComponent } from './partials/apt-staff.component';


//Services
import { AptService } from './apt.service';
import { StaffService } from './staff.service';

//Modules
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddApointmentComponent,
    AptListComponent,
    AptFormComponent,
    AptStaffComponent,
    AptContactComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ AptService, StaffService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
