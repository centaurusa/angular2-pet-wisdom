import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'apt-contact',
  templateUrl: 'apt-contact.component.html',
  styleUrls: ['apt-contact.component.scss']
})

export class AptContactComponent implements OnInit {

    userForm: FormGroup;

    constructor(private _formBuilder: FormBuilder) {

    }

    ngOnInit() {
      this.userForm = this._formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
        email: [],
        address: this._formBuilder.group({
          street: [],
          city: [],
          postalcode: [null, [Validators.pattern('^[1-9][0-9]{4}$')]]
        })
      })
    }
    // userForm = new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   email: new FormControl(),
    //   address: new FormGroup({
    //     street: new FormControl(),
    //     city: new FormControl(),
    //     postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))
    //   })
    // });

    onSubmit() {
      console.log(this.userForm.value);
    }
}
