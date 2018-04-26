import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneralComponent } from './general/general.component';
import { GoodsComponent } from './goods/goods.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './category/add/add-category.component';
import { ConfigCategoryComponent } from './category/config/config-category.component';
import { AddGoodsComponent } from './goods/add/add-goods.component';
import {BrandComponent} from './brand/brand.component';
import {AddBrandComponent} from './brand/add/add-brand.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path: '', redirectTo: '/general', pathMatch: 'full'},
  {path: 'general', component: GeneralComponent},
  {path: 'goods', component: GoodsComponent},
  {path: 'order', component: OrderComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'brand', component: BrandComponent},
  {path: 'add-category/:parentId', component: AddCategoryComponent},
  {path: 'config-category/:id', component: ConfigCategoryComponent},
  {path: 'add-goods', component: AddGoodsComponent},
  {path: 'add-brand', component: AddBrandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
