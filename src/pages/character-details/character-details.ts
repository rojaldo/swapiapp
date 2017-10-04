import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';

/**
 * Generated class for the CharacterDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character-details',
  templateUrl: 'character-details.html',
})
export class CharacterDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private myService: RequestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterDetailsPage');
  }

}
