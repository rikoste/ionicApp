import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalData } from '../../providers/globaldata/globaldata';

@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html'
})
export class FormsPage {

	data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public globalData: GlobalData) {
  	//this.data = [];
  }

  ionViewDidLoad(){
  	this.data = this.globalData.getGlobalData();
  	console.log(this.data);
  }

}
