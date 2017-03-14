import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SellersService } from './sellers.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { ListSellerComponent } from './list-seller/list-seller.component';
import { SellerDetailComponent } from './seller-detail/seller-detail.component';
import { SellerDlgComponent } from './seller-dlg/seller-dlg.component';
import { ProductDlgComponent } from './product-dlg/product-dlg.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ListSellerComponent,
    SellerDetailComponent,
    SellerDlgComponent,
    ProductDlgComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    RouterModule.forRoot([ {
      path: '',
      redirectTo: 'sellers',
      pathMatch: 'full'
    }, {
      path: 'sellers',
      component: ListSellerComponent,
    }, {
      path: 'sellers/:sellerId',
      component: SellerDetailComponent
    }])
  ],
  providers: [SellersService],
  bootstrap: [AppComponent],
  entryComponents: [SellerDlgComponent]
})
export class AppModule { }
