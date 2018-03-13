import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
  providers: [HttpProvider]
})

export class ServicesPage {
	
	services: any;
	
	constructor(public navCtrl: NavController, private httpProvider: HttpProvider, public alertCtrl: AlertController) {
		this.getdata();
	}
  
	/**
	 *	Récupération des données JSON via le provider
	 */
	getdata(){
	  this.httpProvider.getJsonData().subscribe(
		result => {
		  this.services = result.service;
		  console.log("Success : " + this.services);
		}
	  );
	}
	
	/**
	 *	Test : affichage d'une alerte
	 */
	showAlert(service) {
		let alert = this.alertCtrl.create({
			title: 'Test !',
			subTitle: 'Tu as cliqué sur un service !',
			buttons: ['Ok']
		});
		alert.present();
	}
}
