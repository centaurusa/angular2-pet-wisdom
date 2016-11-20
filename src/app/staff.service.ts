import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class StaffService {


  private _url: string = "assets/staff.json";

  constructor(private _http: Http) {

  }

  getStaff() {
    return this._http.get(this._url)
      .map((response: Response) => response.json());


  }

  // _errorHandler(error: Response) {
  //   console.error(error);
  //   return Observable.throw(error || "Server error");
  // }
}// end class
