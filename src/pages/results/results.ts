import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {

  constructor(private storage: Storage, public navCtrl: NavController) {

    this.storage.length().then(datalength => {
		this.storage.get(datalength-1).then((val) => {
		  console.log('Your json is', val);
		});
   });

}
}
