import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {

	result: any;
	keys: any;

  	constructor(private storage: Storage, public navCtrl: NavController, public alertCtrl: AlertController) {
  		this.result = [];

	}

	ionViewDidEnter(){

	    this.storage.length().then(datalength => {
	    	this.result = [];

	    	for(var i = 0; i < datalength; i++){
				this.storage.get((i).toString()).then((val) => {
					this.result.push(val);
					console.log(this.result);
			   	});
	    	}
		});
	}

	public getKeys(data){
	    this.keys = Object.keys(data);
	    return true;
	}
}
