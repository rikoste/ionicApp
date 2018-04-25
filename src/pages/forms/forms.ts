import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalData } from '../../providers/globaldata/globaldata';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html'
})

export class FormsPage {

  title: any;
	data: any;
  formData: any;

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public globalData: GlobalData, public alertCtrl: AlertController) {
    this.formData  = {};
  }

  subForm() {
    this.formData.Service = this.title;
    let dat = this.formData;

    this.storage.length().then(datalength => {
      this.storage.set(datalength, dat);
    });
  }

  ionViewDidEnter(){
    
    if(this.globalData.getGlobalData() == undefined){ 
      let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Merci de choisir un service.',
          buttons: [{
              text: 'Ok',
              handler: () => {
                this.navCtrl.parent.select(0);
              }
          }]
      });

      alert.present();
    }else{
        this.title = this.globalData.getTitle();
        this.data = this.globalData.getGlobalData(); 
    };

    // [DEBUG]
  	console.log('Données chargées dans forms : ');
    console.log(this.data);
  }

}
