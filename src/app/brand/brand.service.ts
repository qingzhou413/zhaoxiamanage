import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Brand } from './Brand';

@Injectable()
export class BrandService {

  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  private brandListUrl = "/brand/list";
  private delBrandUrl = "/brand/del";
  private addBrandUrl = "/brand/add";

  constructor(private http: Http){}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  list(): Promise<any> {
    return this.http.get(this.brandListUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  add(name: string): Promise<any> {
    return this.http.post(this.addBrandUrl, "name=" + name, {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  del(id:number):Promise<any> {
    return this.http.post(this.delBrandUrl, "id=" + id, {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
}
