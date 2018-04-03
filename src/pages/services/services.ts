import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { AlertController } from 'ionic-angular';

import { FormsPage } from '../forms/forms';

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
		}
	  );
	}
	
	/**
	 *	Test
	 */
	serviceClicked(serviceData) {

		this.navCtrl.push(FormsPage, serviceData);
		//this.navCtrl.parent.select(1);
	}
}
