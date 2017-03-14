import { Component, OnInit } from '@angular/core';
import { SellersService, Product } from '../sellers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-dlg',
  templateUrl: './product-dlg.component.html',
  styleUrls: ['./product-dlg.component.css']
})
export class ProductDlgComponent implements OnInit {

  product: Product;
  productName: string;
  productPrize: number;
  productQuantitySold: number;
  productInStock: number;
  sellerId: number;


  constructor(private service: SellersService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NgbActiveModal) { }

  ngOnInit() {
    console.log('this is seller id: ' + this.sellerId);
    this.product = {id: undefined, name: '', price: 0, quantitySold: 0, quantityInStock: 0, imagePath: ''};
  }

  onClickSaveNewProduct() {
      this.product.name = this.productName;
      this.product.price = this.productPrize;
      this.product.quantitySold = this.productQuantitySold;
      this.product.quantityInStock = this.productInStock;
      this.product.imagePath = "http://i.imgur.com/D5vdjTY.png";
      this.service.postProduct(this.product, this.sellerId).subscribe(succeeded => {
          this.modalService.close();
      });
  }

  onGoBack() {
      this.modalService.dismiss();
  }

}
