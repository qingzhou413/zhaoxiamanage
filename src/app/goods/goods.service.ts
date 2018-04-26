import {Injectable} from '@angular/core';


import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Goods} from './Goods';
import {QueryParam} from '../util/QueryParam';

@Injectable()
export class GoodsService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  private headersJson = new Headers({'Content-Type': 'application/json;charset=utf-8'});
  private goodsUrl = '/goods/list';
  private addGoodsUrl = '/goods/add';

  constructor(private http: Http) {
  }

  getGoods(query: QueryParam): Promise<any> {
    return this.http.get(this.goodsUrl + '?' + query.getQueryString())
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  addGoods(goods: Goods): Promise<any> {
    return this.http.post(this.addGoodsUrl, JSON.stringify(goods), {headers: this.headersJson})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
}
