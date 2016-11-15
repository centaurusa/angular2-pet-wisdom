import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//classes
//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header.component';
import { FooterComponent } from './partials/footer.component';
import { AddApointmentComponent } from './partials/add-appointment.component';
import { AptListComponent  } from './partials/apt-list.component';

//Services
import { AptService } from './apt.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddApointmentComponent,
    AptListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ AptService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
