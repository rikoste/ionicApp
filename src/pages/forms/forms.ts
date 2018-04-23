import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalData } from '../../providers/globaldata/globaldata';
import { AlertController } from 'ionic-angular';
import { SchemaFormModule, WidgetRegistry } from "angular2-schema-form";
import { IonWidgetRegistry, IonSchemaFormModule } from "ionic-schema-form";

@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html'
})

export class FormsPage {

  title: any;
	data: any;
  formData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public globalData: GlobalData, public alertCtrl: AlertController) {
      this.formData = {};

  }

  subForm() {
    console.log(this.formData);
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


  	console.log('Données chargées dans forms : ');
    console.log(this.data);
  }

}
