import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AddApointmentComponent } from './partials/add-appointment.component';
import { AptStaffComponent } from './partials/apt-staff.component';
import { AptStaffDetailComponent } from './partials/apt-staff-detail.component';
import { AppComponent } from './app.component';
import { AptListComponent  } from './partials/apt-list.component';
import { AptFormComponent } from './partials/apt-form.component';
import { AptContactComponent } from './partials/apt-contact.component';
import { FooterComponent } from './partials/footer.component';
import { HeaderComponent } from './partials/header.component';
import { PageNotFoundComponent } from './partials/pageNotFoundComponent';

//Services
import { AptService } from './apt.service';
import { StaffService } from './staff.service';

//Modules
import { AppRoutingModule } from './app-routing.module';

//pipes
import { AptSearchPipe } from './apt-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddApointmentComponent,
    AptListComponent,
    AptFormComponent,
    AptStaffComponent,
    AptStaffDetailComponent,
    AptContactComponent,
    AptSearchPipe,
    PageNotFoundComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ AptService, StaffService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
