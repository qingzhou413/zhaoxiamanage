import {Injectable} from '@angular/core';


import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Order} from './Order';
import {QueryParam} from '../util/QueryParam';

@Injectable()
export class OrderService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  private headersJson = new Headers({'Content-Type': 'application/json;charset=utf-8'});
  private orderUrl = '/order/list';

  constructor(private http: Http) {
  }

  getOrder(query: QueryParam): Promise<any> {
    return this.http.get(this.orderUrl + '?' + query.getQueryString())
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}