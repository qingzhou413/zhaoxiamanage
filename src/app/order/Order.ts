export class Order {
	id: number;
	nickname: string;
	mchId: string;
	headimgurl: string;
	tradeNum: string;
	tradeType: string;
	bankType: string;
 	totalMoney: number;
  	transactionId: string;
  	createTime: string;
	retPrepayId: string;
	details = [];
	constructor(){
	  this.id = 0;
	  this.nickname = '';
	  this.mchId = '';
	  this.headimgurl = '';
	  this.tradeNum = '';
	  this.tradeType = '';
	  this.bankType = '';
	  this.totalMoney = 0;
	  this.transactionId = '';
	  this.details = [];
	  this.createTime = '';
	  this.retPrepayId = '';
  }
}