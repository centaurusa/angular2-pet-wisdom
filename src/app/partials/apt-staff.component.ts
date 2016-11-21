import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { StaffService } from '../staff.service';

@Component({
  selector: 'apt-about',
  templateUrl: './apt-staff.component.html',
  styleUrls: ['./apt-staff.component.scss']
})

export class AptStaffComponent {

  public staff;
  constructor(private _staffService: StaffService ) {

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

}
