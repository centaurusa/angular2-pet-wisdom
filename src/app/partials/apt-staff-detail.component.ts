import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  template:
  `
      <div class="container main">
        <div>Detail Component of Id: {{ staffId }} </div>
        <hr />
        <button (click)="onBackToStaff()" class="btn btn-primary">Back To Staff List</button>
        <button (click)="onPrev()" class="btn btn-primary">Previous</button>
        <button (click)="onNext()" class="btn btn-primary">Next</button>
      </div>
  `,
  styles: [
    `
      .container.main {
        min-height: 640px;
      }
    `
  ]
})


export class AptStaffDetailComponent implements OnInit {
  public staffId;
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  // ngOnInit() {
  //   let id = parseInt(this.route.snapshot.params['id']);
  //   this.staffId = id;
  // }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this.staffId = id;
    })
  }

  onBackToStaff() {
    this.router.navigate(['staff']);
  }

  onPrev() {
    let prevId = this.staffId - 1;
    if (this.staffId <= 1) {
      prevId = 1;
    }
    this.router.navigate(['staff', prevId ]);
  }

  onNext() {
    let nextId = this.staffId + 1;
    this.router.navigate(['staff', nextId]);
  }

}
