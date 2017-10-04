import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider {

  public details: any;

  constructor(public http: Http) {
    console.log('Hello RequestProvider Provider');
  }

  public doRequest(url:string):any{
    this.http.get(url).subscribe(
      (data) => {
        return data.json();
      },
      (err) => {
        return null;
      },
      () => {
        console.log("completed");
      }
    );
  }

}
