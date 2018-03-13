import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

	constructor(public http: Http) {
	console.log('Hello HttpProvider Provider');
	}

	getJsonData(){
	return this.http.get('assets/service.json').map(res => res.json());
	}

}
