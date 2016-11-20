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
  currentTime = new Date().getTime();
  notification = false;

  aptDelete() {
    console.log("deleting apt");
  }

 ifExpired(i) {
   let fullTime = i.aptDate+' '+i.aptTime;
   let filteredFulltime = new Date(fullTime).getTime();
   let isExpired = false;
   if (filteredFulltime < this.currentTime) {
        isExpired = true;
   } else {
        isExpired = false;
   }
   return isExpired;
 }

  @Input()
   data = [];



  constructor(private _aptService: AptService) {

  }


  ngOnInit() {
    // this._aptService.getApts()
    //   .subscribe(
    //     // (data: Response) => this.apointments.push(data),
    //     (data: Response) => {this.data = data; console.log(this.data); this.notification = true;},
    //     (error: Response) => console.log(error)
    //   );

      this.fbGetData();
  }

  fbGetData() {
    firebase.database().ref('/').on('child_added', (snapshot) => {
      console.log(snapshot.val());
      this.data.unshift(snapshot.val())
    })
  }

  getIndex() {
    for (let i=0;i<this.data.length;i++) {

    }
  }

  deleteData() {
    let index;
    let ref = firebase.database().ref('/');

  }
}//end class
