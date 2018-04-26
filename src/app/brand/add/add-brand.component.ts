import {Component, OnInit} from '@angular/core';
import {Brand} from "../Brand";
import {BrandService} from "../brand.service";
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'add-brand',
  templateUrl: './add-brand.component.html',
  providers: [ BrandService ]
})
export class AddBrandComponent implements OnInit{
  name: string;
  addingBrandFormControl = new FormControl('', [
    Validators.required]);

  constructor(
    private service: BrandService,
    private location: Location
  ){  }

  ngOnInit(): void {
    this.initName();
  }

  initName():void {
      this.name = '';
  }

  handleAddRes(json){
    if(json.errorCode == 0){
      alert('添加成功');
      this.initName();
    }else{
      alert(json.errorMsg.join(','));
    }
  }

  submitAddBrand(): void{
      this.service.add(this.name)
        .then(json => this.handleAddRes(json));
  }

  formHasError(): boolean {
      return this.name == '';
  }

  goBack(): void {
    this.location.back();
  }
}
