import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class GlobalData {

	globaldata: any;

	constructor() {
	}

	getGlobalData(){
		return this.globaldata;
	}

	addGlobalData(data){
		this.globaldata = data;
	}

}
