import { Component } from '@angular/core';
import { Apointment } from '../apointment';
import { AptService } from '../apt.service';

declare var firebase: any;

@Component({
  selector: 'add-apointment',
  templateUrl: 'add-apointment.component.html',
  styleUrls: ['add-apointment.component.css']
})

export class AddApointmentComponent {
    submitted = false;
    aptsNew = [];
    showForm: boolean;

    active = true;

    constructor() {
      this.showForm = false;
    }

    moveToAbout() {

    }

    toggleForm() {
      this.showForm = !this.showForm;
    }

    onSubmit(value: any) {
        let apointment : Apointment = new Apointment();

        apointment.setApt(value.petName, value.petOwner, value.aptDate, value.aptTime, value.aptNotes);
        // firebase.database().ref('/').push(value)

        console.log(apointment);
         this.send(apointment);
         this.active = false;
         setTimeout(() => this.active = true, 0);
        //  apointment = null;
      }



      private send(apointment : Apointment) {
        firebase.database().ref('/').push(apointment);
      }
}
