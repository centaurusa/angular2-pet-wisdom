import { Component, OnInit, Input, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AptService } from '../apt.service';
declare var firebase: any;

@Component({
  selector: 'apt-list',
  templateUrl: 'apt-list.component.html',
  styleUrls: ['apt-list.component.scss'],
  inputs: ['apts'],
  animations: [
    trigger('aptDelete', [
      state('void', style({transform: 'translateX(-100%)', opacity: 0})),
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('* => void', [
        animate(400)
      ])
    ])
  ]
})

export class AptListComponent implements OnInit {
  state: string = '*';
  currentTime = new Date().getTime();
  notification = false;


  aptDelete(i) {
    console.log(i);
    this.data.splice(i, 1);
    this.state = (this.state === '*' ? 'void' : '*');
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

}//end class
