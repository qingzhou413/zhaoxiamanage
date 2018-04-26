import { OnInit } from '@angular/core';

import { Page } from './Page';

export class QueryParam implements OnInit{
	vals: string;
	page: Page;
	constructor(){
		this.vals = '';
		this.page = new Page();
		this.page.num = 1;
		this.page.size = 10;
	}

	ngOnInit(): void {
	}
	addParam(key: string, val: string): void {
		if(key && val){
			if(this.vals.length > 0){
				this.vals += '&';
			}
			this.vals += (key + '=' + val);
		}
	}
	setPager(num: number, size: number){
		this.page.num = num;
		this.page.size = size;
	}
	getQueryString(): string{
		var s = this.vals;
		if(s.length > 0){
			s += '&';
		}
		s += 'pageNum=';
		s += ('' + this.page.num);
		s += '&numPerPage=';
		s += ('' + this.page.size);
		return s;
	}
}