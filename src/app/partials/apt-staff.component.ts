import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'apt-about',
  templateUrl: './apt-staff.component.html',
  styleUrls: ['./apt-staff.component.scss'],
  animations: [
    trigger('showStaff', [
      state('void', style({ opacity: 0})),
      state('*', style({opacity: 1})),
      transition('void => *', [
        animate(300)
      ])
    ])
  ]
})

export class AptStaffComponent {
  state: string = '*';
  public staff;
  constructor(private _staffService: StaffService, private router: Router ) {

  }


  ngOnInit() {
    this._staffService.getStaff()
      .subscribe(
        // (data: Response) => this.apointments.push(data),
        (data: Response) => {
          this.staff = data;
          console.log(this.staff);
        }
      );
  } //ngOnInit

  onSelect(vet) {
    this.router.navigate(['/staff', vet.id]);
    console.log(vet.id);
  }

}
