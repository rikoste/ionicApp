import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { SchemaFormModule, WidgetRegistry } from "angular2-schema-form";
import { IonWidgetRegistry, IonSchemaFormModule } from "ionic-schema-form";
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
    SchemaFormModule,
    IonSchemaFormModule,
    IonicModule.forRoot(MyApp)
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
    GlobalData
  ]
})
export class AppModule {}
