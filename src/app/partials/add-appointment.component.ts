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

    showForm: boolean;
    constructor() {
      this.showForm = false;
    }

    toggleForm() {
      this.showForm = !this.showForm;
    }

    onSubmit(newApt) {
      newApt = new Apointment("", "", "", "", "");
      console.log();
      this.submitted = true;
      // this.newApt = new Apointment("", "", "", "", "");
    }


}
