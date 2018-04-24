import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalData } from '../../providers/globaldata/globaldata';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html'
})

export class FormsPage {

  title: any;
	data: any;
  formData: any;
  formValid: any;
  private formGroup : FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public globalData: GlobalData, public alertCtrl: AlertController) {
    this.formData  = [];
    this.formValid = {};
  }

  subForm() {
    console.log(this.formData);

    if(!this.formGroup.valid){
      let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Certains champs ne sont pas valides.',
          buttons: [{
              text: 'Ok'
          }]
      });

      alert.present();
    }else{
      console.log('OK');
    }
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

        /*for(var i = 0; i < this.data.length; i++){
          if(this.data[i].section != "title"){
            if(this.data[i].mandatory == "true"){
              this.formValid[this.data[i].value].push(Validators.required);
            }else{
              this.formValid[this.data[i].value] = ['default value if needed'];
            }
            
          }
        }*/

        this.data.forEach(element => {
            var key = element.value;
            this.formValid[key] = [''];

            if (element.section != "title" && element.mandatory == "true") {
                this.formValid[key].push(Validators.required);
            }
        });

        this.formGroup = this.formBuilder.group(this.formValid);
    };

    // [DEBUG]
  	console.log('Données chargées dans forms : ');
    console.log(this.data);

    console.log('Form valid : ');
    console.log(this.formValid);

  }

}
