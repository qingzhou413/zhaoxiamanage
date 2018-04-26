import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {PageEvent} from '@angular/material';
import { Order } from './Order';
import { Page } from '../util/Page';
import { QueryParam } from '../util/QueryParam';
import { OrderService } from './order.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {
	page: Page;
	order: Order[];
	// order = [];

	length:number;
	pageNum:number = 1;
	numPerPage: number = 10;
	pageSizeOptions = [10];
	pageEvent: PageEvent;
	param = new QueryParam();
	constructor(
		private router: Router,
		private service: OrderService
		) { }

	ngOnInit() {
		this.param.setPager(this.pageNum,this.numPerPage);
		this.getOrderList(this.param);
		/*let str = {"errorCode":0,"errorMsg":[],"filedErr":{},"data":{"currentPage":1,"numPerPage":10,"totalCount":5,"recordList":[{"id":31,"appid":"wx2649254e500949cc","mchId":"1488982322","userId":0,"openId":"omn9c0vNv6WSRvHtiij9KPWy1xY4","address":"{\"id\":1,\"appid\":\"wx2649254e500949cc\",\"userId\":0,\"name\":\"赵强\",\"phone\":\"15206133514\",\"area\":\"江苏省苏州市工业园区菁华公寓\",\"address\":\"11-1907\",\"activeTime\":\"Nov 5, 2017 10:14:25 PM\"}","nickname":"赵强","headimgurl":"http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTISbrVzxkb0gPptOSs5rLvWenjHzia4Yz3z7krfGAfA75qUVq88ld9Hk24Ne6X7DW4AcJOdwIX2Fkg/0","tradeNum":"20171216132953779595","tradeType":"JSAPI","details":"[{\"id\":16,\"userId\":0,\"goodsId\":10,\"specDetId\":18,\"count\":1,\"addTime\":\"Dec 16, 2017 1:29:41 PM\",\"goods\":{\"id\":10,\"rootCatId\":15,\"subCatId\":18,\"brandId\":8,\"packId\":8,\"name\":\"国产香蕉\",\"saleCount\":0,\"specDets\":[{\"id\":18,\"goodsId\":10,\"specName\":\"1\",\"price\":0.10,\"leftCnt\":100}],\"headImg\":\"/staticAccess/img/24d222b0201b4332b1acbb981b25e0d8_vi_tutorial.png\",\"detImgsStr\":\"/staticAccess/img/16fa370e51a14b838deba20f618c20db_vi_tutorial.png,/staticAccess/img/2cc820380797415987486949e08aa0f9_a.png,/staticAccess/img/245736486b9148f9a5378de8bf6721c1_Floor3.jpg\",\"desc\":\"测试\",\"viewCount\":1,\"active\":true},\"specDet\":{\"id\":18,\"goodsId\":10,\"specName\":\"1\",\"price\":0.10,\"leftCnt\":100}}]","totalMoney":10,"createTime":1513402193000,"bankType":"CFT","payTime":1513402427000,"transactionId":"4200000018201712165238412145","status":1,"remark":null,"retPrepayId":"wx20171216132953f221f305970900086869"},{"id":30,"appid":"wx2649254e500949cc","mchId":"1488982322","userId":0,"openId":"omn9c0vNv6WSRvHtiij9KPWy1xY4","address":"{\"id\":1,\"appid\":\"wx2649254e500949cc\",\"userId\":0,\"name\":\"赵强\",\"phone\":\"15206133514\",\"area\":\"江苏省苏州市工业园区菁华公寓\",\"address\":\"11-1907\",\"activeTime\":\"Nov 5, 2017 10:14:25 PM\"}","nickname":"赵强","headimgurl":"http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTISbrVzxkb0gPptOSs5rLvWenjHzia4Yz3z7krfGAfA75qUVq88ld9Hk24Ne6X7DW4AcJOdwIX2Fkg/0","tradeNum":"20171110011259546535","tradeType":"JSAPI","details":"[{\"id\":10,\"userId\":0,\"goodsId\":9,\"specDetId\":16,\"count\":1,\"addTime\":\"Nov 10, 2017 12:47:54 AM\",\"goods\":{\"id\":9,\"rootCatId\":19,\"subCatId\":20,\"brandId\":9,\"packId\":9,\"name\":\"百事可乐\",\"saleCount\":0,\"specDets\":[{\"id\":16,\"goodsId\":9,\"specName\":\"250ml\",\"price\":0.50,\"leftCnt\":100},{\"id\":17,\"goodsId\":9,\"specName\":\"2.5L\",\"price\":6.50,\"leftCnt\":100}],\"headImg\":\"/staticAccess/img/7ffb85a7ac0a41c99a3451ef8c2731eb_577cdf26N93d245c5.jpg\",\"detImgsStr\":\"/staticAccess/img/09ed1b26d0ef46188bb815a9766e0b75_581ffca0N98f8fe84.jpg,/staticAccess/img/a330a5c5489749c186faa7d27ea6b1ea_577cdf20Ndb3ec18c.jpg,/staticAccess/img/a91a7588e4c243e7a98f56c600fbd8ef_577cdf2bN1c2d04fa.jpg\",\"desc\":\"商品名称：百事可乐百事可乐，箱装商品编号：1085299商品产地：中国大陆包装件数：1-6适用场景：餐桌，熬夜/加班，运动，出游，其它是否含糖：含糖口味：其它产品产地：中国大陆单件容量：1L及以上包装：其它分类：碳酸饮料碳酸饮料分类：可乐进口/国产：国产\",\"viewCount\":8,\"active\":true},\"specDet\":{\"id\":16,\"goodsId\":9,\"specName\":\"250ml\",\"price\":0.50,\"leftCnt\":100}}]","totalMoney":50,"createTime":1510247579000,"bankType":"CFT","payTime":1510247586000,"transactionId":"4200000003201711103576578529","status":1,"remark":null,"retPrepayId":"wx20171110011259d240f695360022386146"},{"id":29,"appid":"wx2649254e500949cc","mchId":"1488982322","userId":0,"openId":"omn9c0vNv6WSRvHtiij9KPWy1xY4","address":"{\"id\":2,\"appid\":\"wx2649254e500949cc\",\"userId\":0,\"name\":\"刘继红\",\"phone\":\"18539133311\",\"area\":\"江苏省苏州市工业园区菁华公寓\",\"address\":\"11-1907\",\"activeTime\":\"Nov 5, 2017 10:32:16 PM\"}","nickname":"赵强","headimgurl":"http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTISbrVzxkb0gPptOSs5rLvWenjHzia4Yz3z7krfGAfA75qUVq88ld9Hk24Ne6X7DW4AcJOdwIX2Fkg/0","tradeNum":"20171110011220566980","tradeType":"JSAPI","details":"[{\"id\":10,\"userId\":0,\"goodsId\":9,\"specDetId\":16,\"count\":1,\"addTime\":\"Nov 10, 2017 12:47:54 AM\",\"goods\":{\"id\":9,\"rootCatId\":19,\"subCatId\":20,\"brandId\":9,\"packId\":9,\"name\":\"百事可乐\",\"saleCount\":0,\"specDets\":[{\"id\":16,\"goodsId\":9,\"specName\":\"250ml\",\"price\":0.50,\"leftCnt\":100},{\"id\":17,\"goodsId\":9,\"specName\":\"2.5L\",\"price\":6.50,\"leftCnt\":100}],\"headImg\":\"/staticAccess/img/7ffb85a7ac0a41c99a3451ef8c2731eb_577cdf26N93d245c5.jpg\",\"detImgsStr\":\"/staticAccess/img/09ed1b26d0ef46188bb815a9766e0b75_581ffca0N98f8fe84.jpg,/staticAccess/img/a330a5c5489749c186faa7d27ea6b1ea_577cdf20Ndb3ec18c.jpg,/staticAccess/img/a91a7588e4c243e7a98f56c600fbd8ef_577cdf2bN1c2d04fa.jpg\",\"desc\":\"商品名称：百事可乐百事可乐，箱装商品编号：1085299商品产地：中国大陆包装件数：1-6适用场景：餐桌，熬夜/加班，运动，出游，其它是否含糖：含糖口味：其它产品产地：中国大陆单件容量：1L及以上包装：其它分类：碳酸饮料碳酸饮料分类：可乐进口/国产：国产\",\"viewCount\":8,\"active\":true},\"specDet\":{\"id\":16,\"goodsId\":9,\"specName\":\"250ml\",\"price\":0.50,\"leftCnt\":100}}]","totalMoney":50,"createTime":1510247540000,"bankType":null,"payTime":null,"transactionId":null,"status":0,"remark":null,"retPrepayId":"wx20171110011220d4fc2cedac0284666264"},{"id":28,"appid":"wx2649254e500949cc","mchId":"1488982322","userId":0,"openId":"omn9c0vNv6WSRvHtiij9KPWy1xY4","address":"{\"id\":2,\"appid\":\"wx2649254e500949cc\",\"userId\":0,\"name\":\"刘继红\",\"phone\":\"18539133311\",\"area\":\"江苏省苏州市工业园区菁华公寓\",\"address\":\"11-1907\",\"activeTime\":\"Nov 5, 2017 10:32:16 PM\"}","nickname":"赵强","headimgurl":"http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTISbrVzxkb0gPptOSs5rLvWenjHzia4Yz3z7krfGAfA75qUVq88ld9Hk24Ne6X7DW4AcJOdwIX2Fkg/0","tradeNum":"20171110011038234611","tradeType":"JSAPI","details":"[{\"id\":10,\"userId\":0,\"goodsId\":9,\"specDetId\":16,\"count\":1,\"addTime\":\"Nov 10, 2017 12:47:54 AM\",\"goods\":{\"id\":9,\"rootCatId\":19,\"subCatId\":20,\"brandId\":9,\"packId\":9,\"name\":\"百事可乐\",\"saleCount\":0,\"specDets\":[{\"id\":16,\"goodsId\":9,\"specName\":\"250ml\",\"price\":0.50,\"leftCnt\":100},{\"id\":17,\"goodsId\":9,\"specName\":\"2.5L\",\"price\":6.50,\"leftCnt\":100}],\"headImg\":\"/staticAccess/img/7ffb85a7ac0a41c99a3451ef8c2731eb_577cdf26N93d245c5.jpg\",\"detImgsStr\":\"/staticAccess/img/09ed1b26d0ef46188bb815a9766e0b75_581ffca0N98f8fe84.jpg,/staticAccess/img/a330a5c5489749c186faa7d27ea6b1ea_577cdf20Ndb3ec18c.jpg,/staticAccess/img/a91a7588e4c243e7a98f56c600fbd8ef_577cdf2bN1c2d04fa.jpg\",\"desc\":\"商品名称：百事可乐百事可乐，箱装商品编号：1085299商品产地：中国大陆包装件数：1-6适用场景：餐桌，熬夜/加班，运动，出游，其它是否含糖：含糖口味：其它产品产地：中国大陆单件容量：1L及以上包装：其它分类：碳酸饮料碳酸饮料分类：可乐进口/国产：国产\",\"viewCount\":8,\"active\":true},\"specDet\":{\"id\":16,\"goodsId\":9,\"specName\":\"250ml\",\"price\":0.50,\"leftCnt\":100}}]","totalMoney":50,"createTime":1510247438000,"bankType":null,"payTime":null,"transactionId":null,"status":0,"remark":null,"retPrepayId":"wx2017111001103802548863a70189349624"},{"id":27,"appid":"wx2649254e500949cc","mchId":"1488982322","userId":0,"openId":"omn9c0vNv6WSRvHtiij9KPWy1xY4","address":"","nickname":"赵强","headimgurl":"http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTISbrVzxkb0gPptOSs5rLvWenjHzia4Yz3z7krfGAfA75qUVq88ld9Hk24Ne6X7DW4AcJOdwIX2Fkg/0","tradeNum":"20171109033439589309","tradeType":"JSAPI","details":"[{\"id\":7,\"userId\":0,\"goodsId\":9,\"specDetId\":16,\"count\":2,\"addTime\":\"Nov 5, 2017 11:58:03 PM\",\"goods\":{\"id\":9,\"rootCatId\":19,\"subCatId\":20,\"brandId\":9,\"packId\":9,\"name\":\"百事可乐\",\"saleCount\":0,\"specDets\":[{\"id\":16,\"goodsId\":9,\"specName\":\"250ml\",\"price\":0.50,\"leftCnt\":100},{\"id\":17,\"goodsId\":9,\"specName\":\"2.5L\",\"price\":6.50,\"leftCnt\":100}],\"headImg\":\"/staticAccess/img/7ffb85a7ac0a41c99a3451ef8c2731eb_577cdf26N93d245c5.jpg\",\"detImgsStr\":\"/staticAccess/img/09ed1b26d0ef46188bb815a9766e0b75_581ffca0N98f8fe84.jpg,/staticAccess/img/a330a5c5489749c186faa7d27ea6b1ea_577cdf20Ndb3ec18c.jpg,/staticAccess/img/a91a7588e4c243e7a98f56c600fbd8ef_577cdf2bN1c2d04fa.jpg\",\"desc\":\"商品名称：百事可乐百事可乐，箱装商品编号：1085299商品产地：中国大陆包装件数：1-6适用场景：餐桌，熬夜/加班，运动，出游，其它是否含糖：含糖口味：其它产品产地：中国大陆单件容量：1L及以上包装：其它分类：碳酸饮料碳酸饮料分类：可乐进口/国产：国产\",\"viewCount\":1,\"active\":true},\"specDet\":{\"id\":16,\"goodsId\":9,\"specName\":\"250ml\",\"price\":0.50,\"leftCnt\":100}}]","totalMoney":100,"createTime":1510169679000,"bankType":"CFT","payTime":1510169683000,"transactionId":"4200000029201711093377474009","status":1,"remark":null,"retPrepayId":"wx20171109033439cb07504b870602288168"}],"pageCount":1,"beginPageIndex":1,"endPageIndex":1,"countResultMap":null},"valid":true};
		this.order = str.data.recordList;
		for(let i = 0; i < this.order.length; i++){
			let obj = this.order[i];
			obj.createTime = this.convertToDate(obj.createTime);
		}
		console.log(this.order);
		this.length = str.data.totalCount;*/
	}

	getOrderList(param){
		this.service.getOrder(param)
				.then(json => {
          if (json.errorCode != 0) {
            alert('error...' + json.errorMsgs.join(','));
          } else {
            this.order = json.data.recordList;
            for (let i = 0; i < this.order.length; i++) {
              let obj = this.order[i];
              obj.createTime = this.convertToDate(obj.createTime);
            }
            console.log(this.order);
            this.length = json.data.totalCount;
          }
				});
	}

	pageChange($event){
		this.pageEvent = $event;
		console.log($event.pageIndex + 1)
		this.param.setPager(this.pageEvent.pageIndex + 1,this.pageEvent.pageSize);
		this.getOrderList(this.param);
	}

	convertToDate(nows){
		var now = new Date(nows);
		var year = now.getFullYear();
		var month = (now.getMonth()+1) > 9 ? now.getMonth() : '0' + now.getMonth();
		var date = now.getDate()  > 9 ? now.getDate() : '0' + now.getDate();
		var hour = now.getHours() > 9 ? now.getHours() : '0' + now.getHours();
		var minute = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes();
		var second = now.getSeconds() > 9 ? now.getSeconds() : '0' + now.getSeconds();
		return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
	}
}
