import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { Menu } from './util/Menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shouldRun = true;
  nav_title = '星惠乐超市';
  menus: Menu[]  = [
  	  {
  	  	title:"概况",
        route:"/general",
        selected: true
  	  },
      {
        title:"类目管理",
        route:"/category",
        selected: false
      },
      {
        title:"品牌管理",
        route:"/brand",
        selected: false
      },
	    {
	  	  title:"商品管理",
        route:"/goods",
        selected: false
	    },
      {
        title:"订单管理",
        route:"/order",
        selected: false
      }
  ];

  constructor(private router: Router){

  }
  leftSideMenuClick(clickMenu: any):void {
    for(var i=0; i<this.menus.length; i++){
      let menu = this.menus[i];
      menu.selected = menu.title == clickMenu.title;
    }
    console.log('nav to :' + clickMenu.route);
    this.router.navigate([clickMenu.route]);
  }
}
