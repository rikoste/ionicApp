import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {

	result: any;

  	constructor(private storage: Storage, public navCtrl: NavController) {
	}

	ionViewDidEnter(){
	    this.storage.length().then(datalength => {
			this.storage.get((datalength-1).toString()).then((val) => {
			  console.log('Your json is', val);
			});
	   	});
	}
}
