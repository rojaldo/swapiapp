import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DetailsPage } from '../details/details';
import { RequestProvider } from '../../providers/request/request';

/**
 * Generated class for the NewContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planets',
  templateUrl: 'planets.html',
})
export class PlanetsPage {

  private myvar: string;
  private myArray: any[];
  private response: any;
  private locked: boolean = false;
  public details: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private myRequest: RequestProvider) {
    this.doRequest('https://swapi.co/api/planets/?format=json');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewContactsPage');
  }

  goToDetails(input: any) {
    this.myRequest.details = input;
    this.navCtrl.push(DetailsPage);
  }

  doInfinite(infiniteScroll) {

    if (this.response.next != null) {
      this.myRequest.http.get(this.response.next).subscribe(
        (data) => {
          console.log(this.response.next);
          this.response = data.json();
          for (let index = 0; index < this.response.results.length; index++) {
            this.myArray.push(this.response.results[index])
          }
          this.myArray.concat(this.response.results);
          console.log('result: ' + this.response.count);
        },
        (err) => {
          console.log(err);
        },
        () => {
          infiniteScroll.complete();
          console.log("completed");
        }
      );
    } else {
      infiniteScroll.complete();
    }
  }

  doRequest(url: string) {
    this.myRequest.http.get(url).subscribe(
      (data) => {
        this.response = data.json();
        this.myArray = this.response.results;
        console.log('result: ' + this.response.count);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("completed");
      }
    );
  }

}
