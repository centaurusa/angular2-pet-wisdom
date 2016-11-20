import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()


export class AptService {
    private _url = "https://petapointments.firebaseio.com/.json";
    private _urlAptFirst = "https://petapointments.firebaseio.com/.json";
    //  private _url = "https://jsonplaceholder.typicode.com/users";
    // private _url: string = "data.json";

  constructor(private _http: Http) {

  }

  getApts() {
    return this._http.get(this._url)
      .map((response: Response) => response.json());
      // .catch(this._errorHandler);
  }

  removeApt() {
  }
  _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || "Server error");
  }
}
