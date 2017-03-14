import { Component, OnInit } from '@angular/core';
import { SellersService, Seller, Product } from '../sellers.service';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-seller-detail',
  templateUrl: './seller-detail.component.html',
  styleUrls: ['./seller-detail.component.css']
})
export class SellerDetailComponent implements OnInit {
  sellerId: number;
  private sellers: Seller[];
  private seller: Seller;
  private products: Product[];
  private product: Product;
  private newNameForSeller: string;
  private newCategoryForProduct: string;

  constructor(private service: SellersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const successHandler = (result) => {
      this.seller = result;
    };

    const errorHandler = (err) => {
      // TODO: display toastr!
      console.log('Something failed');
    };

    this.sellerId = this.route.snapshot.params['sellerId'];

    this.service.getSellerById(this.sellerId).subscribe(successHandler, errorHandler);

    this.service.getProductsBySellerId(this.sellerId).subscribe(result => {
      this.products = result;
    });

  }

  onClickSaveNewSellerInfo() {
    this.service.updateInfoForSeller(this.seller);
  }

  onGoBack() {
    this.router.navigate(['/sellers']);
  }

}
