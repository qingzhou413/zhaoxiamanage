import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';

import {Goods} from './Goods';
import {Page} from '../util/Page';
import {QueryParam} from '../util/QueryParam';

import {GoodsService} from './goods.service';
import {PageEvent} from "@angular/material";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css'],
  providers: [GoodsService]
})
export class GoodsComponent implements OnInit {

  page: Page;
  goods: Goods[];

  length: number;
  pageNum: number = 1;
  numPerPage: number = 10;
  pageSizeOptions = [10];
  pageEvent: PageEvent;
  param = new QueryParam();
  constructor(private router: Router,
              private service: GoodsService) {
  }

  ngOnInit() {
    this.param.setPager(this.pageNum,this.numPerPage);
    this.getGoodList(this.param);
  }

  getGoodList(param){
    this.service.getGoods(param).then(json => {
      if (json.errorCode != 0) {
        alert('error...' + json.errorMsgs.join(','));
      } else {
        this.goods = json.data.recordList
        this.length = json.data.totalCount;
      }
    });
  }

  pageChange($event){
    this.pageEvent = $event;
    console.log($event.pageIndex + 1)
    this.param.setPager(this.pageEvent.pageIndex + 1,this.pageEvent.pageSize);
    this.getGoodList(this.param);
  }

  clickAddGoods(): void {
    this.router.navigate(['/add-goods'])
  }

}
