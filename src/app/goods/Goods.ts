import { GoodsSpecDet } from './GoodsSpecDet';

export class Goods {
	id: number;
	name: string;
	category: string;
  rootCatId: number;
  subCatId: number;
	specDets: GoodsSpecDet[];
	saleCount: number;
	headImg: string;
	detImgsStr: string;
	desc: string;
	brandId: number;
	packStyleId: number;
	constructor(){
	  this.id = 0;
	  this.name = '';
	  this.category = '';
	  this.rootCatId = 0;
	  this.subCatId = 0;
	  this.specDets = [];
	  this.saleCount = 0;
	  this.headImg = '';
	  this.detImgsStr = '';
	  this.desc = '';
	  this.brandId = 0;
	  this.packStyleId = 0;
  }
}
