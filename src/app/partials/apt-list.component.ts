import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AptService } from '../apt.service';

@Component({
  selector: 'apt-list',
  templateUrl: 'apt-list.component.html',
  styleUrls: ['apt-list.component.css'],
  inputs: ['apts']
})

export class AptListComponent implements OnInit {

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
        (data: Response) => console.log(data)
      );

  }

}//end class
