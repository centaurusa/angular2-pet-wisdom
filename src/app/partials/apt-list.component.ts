import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AptService } from '../apt.service';
declare var firebase: any;

@Component({
  selector: 'apt-list',
  templateUrl: 'apt-list.component.html',
  styleUrls: ['apt-list.component.css'],
  inputs: ['apts']
})

export class AptListComponent implements OnInit {
  notification = false;
  aptDelete() {
    console.log("deleting apt");
  }

  @Input()
  data: Object;

  constructor(private _aptService: AptService) {

  }


  ngOnInit() {
    this._aptService.getApts()
      .subscribe(
        // (data: Response) => this.apointments.push(data),
        (data: Response) => {this.data = data; console.log(this.data); this.notification = true;},
        (error: Response) => console.log(error)
      );

  }

}//end class
