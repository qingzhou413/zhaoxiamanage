import { Component, OnInit, TemplateRef } from '@angular/core';

import { Router } from '@angular/router';
import {BrandService} from "./brand.service";
import {CategoryService} from "../category/category.service";
import {Brand} from "./Brand";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  providers: [ BrandService ]
})
export class BrandComponent implements OnInit{

  brands: Brand[];

  constructor(
    private service: BrandService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList():void{
    this.service.list().then(json => json.errorCode == 0 ? this.brands = json.data : alert('error...' + json.errorMsg.join(',')));
  }

  clickAddBrand():void {
    this.router.navigate(['/add-brand']);
  }

  delBrand(id: number): void {
    this.service.del(id);
    this.refreshList();
  }

}
