import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html'
})
export class FormsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad(){
  	console.log(this.navParams);
  }

}
