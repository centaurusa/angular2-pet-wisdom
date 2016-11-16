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

    // apt = new Apointment("Yasha", "Nikolay", "25.12.16", "Lack of appetite");
    submitted = false;
    aptsNew = [];
    showForm: boolean;

    newApt = new Apointment("", "", "", "", "");

    constructor() {
      this.showForm = false;
    }



    toggleForm() {
      this.showForm = !this.showForm;
    }

    onSubmit(value: any) {
        console.log(value);
        this.newApt.petName = value.petName;
        this.newApt.petOwner = value.petOwner;
        this.newApt.aptDate = value.aptDate;
        this.newApt.aptTime = value.aptTime;
        this.newApt.aptNote = value.aptNote;
        console.log(this.newApt);
        // firebase.database().ref('/').push(value)
        console.log(value.petName);
      }



}
