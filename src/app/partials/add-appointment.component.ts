import { Component } from '@angular/core';
import { Apointment } from '../apointment';

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
    constructor() {
      this.showForm = false;
    }

    toggleForm() {
      this.showForm = !this.showForm;
    }

    onSubmit(petName, ownerName, aptDate, aptTime, aptNote) {
      let newApt = new Apointment(petName, ownerName, aptDate, aptTime, aptNote);
      console.log(newApt);
      this.aptsNew.push(newApt);
      this.submitted = true;
      console.log(this.aptsNew);
    }


}
