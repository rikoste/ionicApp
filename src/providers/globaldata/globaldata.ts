import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class GlobalData {

	title: any;
	globaldata: any;

	constructor() {
	}

	getTitle(){
		return this.title;
	}

	setTitle(title){
		this.title = title;
	}

	getGlobalData(){
		return this.globaldata;
	}

	addGlobalData(data){
		this.globaldata = data;
	}

}
