import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  uui:any;
  model:any;
  platform:any;
  version:any;
  memory:any;
  cpu:any;
  totalstorage:any;
  
  constructor(public navCtrl: NavController,private device: Device) {
 
 	this.uuid     = this.device.uuid;
	this.model    = this.device.model
	this.platform = this.device.platform
	this.version  = this.device.version

	console.log(this.totalstorage)
}

}
