import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()


export class AptService {
  // private _url = "https://petapointments.firebaseio.com/Apts";
     private _url = "https://jsonplaceholder.typicode.com/users";
    // private _url = "src/app/data.json";

  constructor(private _http: Http) {

  }

  getApts() {
    return this._http.get(this._url)
      .map(res => res.json());

  }
}
