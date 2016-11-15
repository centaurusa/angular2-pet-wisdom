import { Component } from '@angular/core';
import { Apointment } from '../apointment';

@Component({
  selector: 'add-apointment',
  templateUrl: 'add-apointment.component.html',
  styleUrls: ['add-apointment.component.css']
})

export class AddApointmentComponent {
    showForm: boolean;
    constructor() {
      this.showForm = false;
    }

    toggleForm() {
      this.showForm = !this.showForm;
    }

    btnSubmit(item) {
      console.log("submited");
      console.log(item);
    }


}
