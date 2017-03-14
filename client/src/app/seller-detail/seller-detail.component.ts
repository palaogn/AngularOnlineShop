import { Component, OnInit } from '@angular/core';
import { SellersService, Seller, Product } from '../sellers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditSellerDlgComponent } from '../edit-seller-dlg/edit-seller-dlg.component';



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
  private topTenProducts: Product[];
  private product: Product;
  private newNameForSeller: string;
  private newCategoryForSeller: string;

  constructor(private service: SellersService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal) { }

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

      this.topTenProducts = this.products;
        for(let i = this.topTenProducts.length-1; i >= 0; i--) {
          for(let k = 1; k <= i; k++) {
            if(this.topTenProducts[k-1].quantitySold < this.topTenProducts[k].quantitySold) {
              let tmp = this.topTenProducts[k-1];
              this.topTenProducts[k-1] = this.topTenProducts[k];
              this.topTenProducts[k] = tmp;
            }
          }
        }
    });

  }

editSeller() {
  const modalInstance = this.modalService.open(EditSellerDlgComponent);
  //modalInstance.componentInstance.sellerName = 'Gudmundur';
  modalInstance.result.then(obj => {
      console.log("Dialog was closed OK");
      console.log(obj);
  }).catch(err => {
      console.log("Dialog was cancelled.");
      console.log(err);
  });
}

  onClickSaveNewSellerInfo() {
      this.seller.name = this.newNameForSeller;
      this.seller.category = this.newCategoryForSeller;
      this.service.updateInfoForSeller(this.seller.id, this.seller).subscribe(succeeded => {
      });
  }

  onGoBack() {
    this.router.navigate(['/sellers']);
  }

  onProductEdited(p: Product) {
    console.log(p);
    this.service.updateProduct(this.sellerId, p).subscribe(succeeded => {
    });
  }

}
