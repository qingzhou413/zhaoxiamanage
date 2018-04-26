import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Category } from './Category';

@Injectable()
export class CategoryService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
	private rootCategoriesUrl = '/category/roots';
  private addCatUrl = '/category/add';
  private getCatSubsUrl = '/category/subCats';
  private delCatUrl = '/category/del';
	constructor(private http: Http){}

  getRoots(): Promise<any> {
		return this.http.get(this.rootCategoriesUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
  	console.error('An error occurred', error); // for demo purposes only
  	return Promise.reject(error.message || error);
  }

  addCategory(cat: string, parentId: number): Promise<any>{
    return this.http.post(this.addCatUrl, "category=" + cat + "&parentId=" + parentId, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
  }

  getSubs(id: number): Promise<any>{
    return this.http.get(this.getCatSubsUrl + '?catId=' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
  }

  delCat(id: number): Promise<any>{
    return this.http.post(this.delCatUrl, "id=" + id, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
  }
}
