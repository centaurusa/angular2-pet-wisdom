import { Component,
         trigger,
         state,
         style,
         transition,
         animate
 } from '@angular/core';
import { Apointment } from '../apointment';
import { AptService } from '../apt.service';

declare var firebase: any;

@Component({
  selector: 'add-apointment',
  templateUrl: 'add-apointment.component.html',
  styleUrls: ['add-apointment.component.scss'],
  animations: [
    trigger('formState', [
      state('inactive', style({
        display: 'none'
      })),
      state('active', style({
        display: 'block'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})

export class AddApointmentComponent {
    state: string = 'inactive';
    submitted = false;
    aptsNew = [];
    showForm: boolean;

    toggleState() {
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }

    active = true;

    constructor() {
      this.showForm = false;
    }

    moveToAbout() {

    }

    // toggleForm() {
    //   this.showForm = !this.showForm;
    // }

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
