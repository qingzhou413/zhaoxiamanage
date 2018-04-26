import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../category.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';


@Component({
	selector: 'add-category',
	templateUrl: './add-category.component.html',
	providers: [ CategoryService ]
})
export class AddCategoryComponent implements OnInit{

	parentId: number;

	constructor(
		private service: CategoryService,
		private location: Location,
    	private route: ActivatedRoute,
    	private router: Router
	){}

	ngOnInit():void{
		this.route.paramMap
		.switchMap( (params: ParamMap) => this.setParentId(+params.get('parentId')))
		.subscribe(json => this.handRes(json));
	}

	setParentId(pId: number):Promise<any>{
		this.parentId = pId;
		return new Promise(function(resolve, reject) {});
	}

	handRes(json: any){
		if(json.errorCode == 0){
			alert("添加成功");
			this.goBack();
		}else{
			alert(json.errorMsg.join(','));
		}
	}
	
	addCategory(cat: string): void {
		this.service.addCategory(cat, this.parentId).then(json => this.handRes(json));
	}

	goBack(): void {
	  this.location.back();
	}
}