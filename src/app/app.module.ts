// module
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

// import { CommonModule } from '@angular/common';
// import { FileUploadModule } from 'ng2-file-upload';
//
import {AppRoutingModule} from './app-routing.module';
// component
import {AppComponent} from './app.component';
import {GeneralComponent} from './general/general.component';
import {GoodsComponent} from './goods/goods.component';
import {CategoryComponent} from './category/category.component';
import {AddCategoryComponent} from './category/add/add-category.component';
import {ConfigCategoryComponent} from './category/config/config-category.component';
import {AddGoodsComponent} from './goods/add/add-goods.component';
import {BrandComponent} from './brand/brand.component';
import {AddBrandComponent} from './brand/add/add-brand.component';

import {ModalModule} from 'ngx-bootstrap/modal';
// UI
// import {MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatCheckboxModule, MatSidenavModule} from '@angular/material';
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatOptionModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
// import {MatIconModule, MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// service

import {CdkTableModule} from '@angular/cdk/table';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    GoodsComponent,
    CategoryComponent,
    AddCategoryComponent,
    ConfigCategoryComponent,
    AddGoodsComponent,
    BrandComponent,
    AddBrandComponent,
    OrderComponent
  ],
  imports: [
    // CommonModule,
    // FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    ModalModule.forRoot(),
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
