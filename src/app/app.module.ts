import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { FormsPage } from '../pages/forms/forms';
import { ResultsPage } from '../pages/results/results';
import { ServicesPage } from '../pages/services/services';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';
import { GlobalData } from '../providers/globaldata/globaldata';

import { IonicStorageModule } from '@ionic/storage';
import { Device } from '@ionic-native/device';

@NgModule({
  declarations: [
    MyApp,
    FormsPage,
    ResultsPage,
    ServicesPage,
    AboutPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
	  HttpModule,
	  HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FormsPage,
    ResultsPage,
    ServicesPage,
    AboutPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    GlobalData,
    Device
  ]
})
export class AppModule {}
