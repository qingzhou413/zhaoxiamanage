export class GoodsSpecDet {
	id: number;
	goodsId: number;
	specName: string;
	price: string;
	leftCnt: string;
	barCode: string;

  constructor() {
    this.id = 0;
    this.goodsId = 0;
    this.specName = '';
    this.price = '';
    this.leftCnt = '';
    this.barCode = '';
  }
}
