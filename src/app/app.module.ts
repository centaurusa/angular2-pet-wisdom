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

//Services
import { AptService } from './apt.service';

const appRoutes: Routes = [
  { path: 'home', component: AptFormComponent },
  { path: 'about', component: AptAboutComponent },
  { path: '', component: AptFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddApointmentComponent,
    AptListComponent,
    AptFormComponent,
    AptAboutComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AptService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
