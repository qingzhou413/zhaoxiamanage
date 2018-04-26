import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {Location} from '@angular/common';

// import { FileUploader, FileItem } from 'ng2-file-upload';

import {Page} from '../../util/Page';
import {QueryParam} from '../../util/QueryParam';

import {Goods} from '../Goods';
import {GoodsSpecDet} from '../GoodsSpecDet';
import {GoodsService} from '../goods.service';
import {Category} from '../../category/Category';
import {CategoryService} from "../../category/category.service"
import {Brand} from "../../brand/Brand";
import {BrandService} from "../../brand/brand.service"
import {PackStyle} from "../../pack/PackStyle"
import {PackstyleService} from "../../pack/packstyle.service"

import {FormControl, Validators} from '@angular/forms';

import {Headers, Http, Response} from '@angular/http';
import {Options} from "tslint/lib/runner";

const PRICE_REGEX = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;


@Component({
  selector: 'add-goods',
  templateUrl: './add-goods.component.html',
  providers: [GoodsService, CategoryService, BrandService, PackstyleService]
})
export class AddGoodsComponent implements OnInit {

  //预加载属性
  rootCats: Category[];
  subCats: Category[];
  brands: Brand[];
  packs: PackStyle[];
  //要添加的商品对象
  goods: Goods;
  //是否正在添加规格
  addingSpec: boolean;
  addingSpecDet: GoodsSpecDet;
  addingSpecFormControl = new FormControl('', [
    Validators.required]);
  uploadType: string;
  // uploader:FileUploader;
  // upImg: File;
  // upImg2: File;

  constructor(private service: GoodsService,
              private catService: CategoryService,
              private brandService: BrandService,
              private packService: PackstyleService,
              private location: Location,
              private router: Router,
              private http: Http) {
  }

  /**
   * 初始化需要预加载的信息
   */
  ngOnInit(): void {
    this.addingSpec = false;
    this.goods = new Goods();
    this.catService.getRoots().then(json => json.errorCode == 0 ? this.rootCats = json.data : alert('警告: ' + json.errorMsg.join(',')));
    this.brandService.list().then(json => json.errorCode == 0 ? this.brands = json.data : alert('警告: ' + json.errorMsg.join(',')));
    this.packService.list().then(json => json.errorCode == 0 ? this.packs = json.data : alert('警告: ' + json.errorMsg.join(',')));
  }

  fileChange(files: any, uploadType: string) {
    console.log(files);
    this.uploadType = uploadType;

    let _formData = new FormData();
    _formData.append("file", files[0]);
    let body = _formData;
    this.http.post("/upload/img", body)
      .toPromise()
      .then(response => {
        let json = response.json();
        this.handleUploadRes(json);
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  handleUploadRes(json: any): void {
    console.log('upload callback');
    console.log(json);
    if (json.errorCode == 0) {
      var imgPath = '/staticAccess/img/' + json.data;
      if (this.uploadType == 'main') {
        this.goods.headImg = imgPath;
      } else if (this.uploadType == 'others') {
        var nowOthers = this.goods.detImgsStr;
        if (nowOthers.length > 0) {
          nowOthers += ',';
        }
        nowOthers += imgPath;
        this.goods.detImgsStr = nowOthers;
      }
    }else{
      alert("上传失败了，请重试");
    }
  }

  /**
   * 选择主类目，级联加载子类目
   */
  selectRootCat(): void {
    console.log(this.goods.rootCatId);
    this.catService.getSubs(this.goods.rootCatId).then(json => json.errorCode == 0 ? this.subCats = json.data.subs : alert('警告: ' + json.errorMsg.join(',')));
  }

  /**
   * 添加规格
   */
  addSpec(): void {
    this.addingSpecDet = new GoodsSpecDet();
    this.addingSpec = true;
  }

  /**
   * 添加规格到缓存里
   */
  saveAddSpec(): void {
    console.log(this.addingSpecDet);
    var newSpec = new GoodsSpecDet();
    newSpec.specName = this.addingSpecDet.specName;
    newSpec.leftCnt = this.addingSpecDet.leftCnt;
    newSpec.price = this.addingSpecDet.price;
    newSpec.barCode = this.addingSpecDet.barCode;
    this.goods.specDets.push(newSpec);
    this.addingSpec = false;
  }

  cancelAddSpec(): void {
    this.addingSpec = false;
  }

  addSpectformHasError(): boolean {
    return this.addingSpecDet.specName.length == 0 || this.addingSpecDet.leftCnt.length == 0 || this.addingSpecDet.price.length == 0;
  }

  addGoodsFormHasError(): boolean {
    return this.goods.name.length == 0 || this.goods.rootCatId == 0 || this.goods.subCatId == 0 || this.goods.brandId == 0 || this.goods.packStyleId == 0;
  }

  submitAddGoods(): void {
    this.service.addGoods(this.goods)
      .then(json => this.handAddGoodsRes(json));
  }

  handAddGoodsRes(json: any): void {
    if(json.errorCode == 0){
      alert('添加成功');
      this.goBack();
    }else{
      alert(json.errorMsg.join(','));
    }
  }

  delSpec(index: number): void {
    this.goods.specDets.splice(index, 1);
  }

  goBack(): void {
    this.location.back();
  }
}
