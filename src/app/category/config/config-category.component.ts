import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../category.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../Category';

import 'rxjs/add/operator/switchMap';


@Component({
	selector: 'config-category',
	templateUrl: './config-category.component.html',
	providers: [ CategoryService ]
})
export class ConfigCategoryComponent implements OnInit {

	id: number;
	name: string;
	subs: Category[];

	constructor(
		private service: CategoryService,
    	private route: ActivatedRoute,
		private location: Location, 
  		private router: Router
	){}

	ngOnInit(): void {
		this.route.paramMap
		.switchMap((params: ParamMap) => this.service.getSubs(+params.get('id')))
		.subscribe(json => this.handQuery(json));
	}

	handQuery(json: any){
		if(json.errorCode == 0){
			console.log(json);
			this.id = json.data.id;
			this.name = json.data.name;
			this.subs = json.data.subs;
		}else{
			alert(json.errorMsg.join(','));
		}
	}

	clickAddSubCat():void {
		this.router.navigate(['/add-category', this.id]);
	}

	delSub(subId: number): void{
		this.service.delCat(subId)
		.then(json => this.handDel(json));
	}

	handDel(json: any){
		if(json.errorCode == 0){
			alert("删除成功");
			this.service.getSubs(this.id)
			.then(ret => this.handQuery(ret));
		}else{
			alert(json.errorMsg.join(','));
		}
	}

	goBack(): void {
	  this.location.back();
	}
}