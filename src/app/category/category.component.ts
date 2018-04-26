import { Component, OnInit, TemplateRef } from '@angular/core';

import { Router } from '@angular/router';


import { Category } from './Category';

import { CategoryService } from './category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ CategoryService ]
})
export class CategoryComponent implements OnInit {

  cats: Category[];

  constructor(
  	private service: CategoryService, 
  	private router: Router
  	) { }

  ngOnInit() {
  	this.refreshList();
  }

  refreshList():void{
    this.service.getRoots().then(json => json.errorCode == 0 ? this.cats = json.data : alert('error...' + json.errorMsg.join(',')));
  }

  clickAddRootCategory(): void {
  	this.router.navigate(['/add-category', -1]);
  }
  clickConfigCategory(id: number): void{
    this.router.navigate(['/config-category', id]);
  }
  
  delCat(id: number): void{
    this.service.delCat(id)
    .then(json => this.handDel(json));
  }

  handDel(json: any){
    if(json.errorCode == 0){
      alert("删除成功");
      this.refreshList();
    }else{
      alert(json.errorMsg.join(','));
    }
  }

}
