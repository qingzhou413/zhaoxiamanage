import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { PackStyle } from './PackStyle';

@Injectable()
export class PackstyleService {

  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  private packStyleListUrl = "/packStyle/list";
  private addPackStyleUrl = "/packStyle/add";

  constructor(private http: Http){}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  list(): Promise<any> {
    return this.http.get(this.packStyleListUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  add(name: string): Promise<any> {
    return this.http.post(this.addPackStyleUrl, "name=" + name, {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
}
