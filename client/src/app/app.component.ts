import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from './sellers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SellerDlgComponent } from './seller-dlg/seller-dlg.component';
import { ProductDlgComponent } from './product-dlg/product-dlg.component';
import { EditSellerDlgComponent } from './edit-seller-dlg/edit-seller-dlg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Litla hryllingsbúðin';


  constructor(private modalService: NgbModal) {

  }

  addSeller() {
      const modalInstance = this.modalService.open(SellerDlgComponent);
      modalInstance.componentInstance.sellerName = 'Gudmundur';
      modalInstance.result.then(obj => {
          console.log("Dialog was closed OK");
          console.log(obj);
      }).catch(err => {
          console.log("Dialog was cancelled.");
          console.log(err);
      });
  }

  addProduct() {
      const modalInstance = this.modalService.open(ProductDlgComponent);
      modalInstance.componentInstance.sellerName = 'ff';
      modalInstance.result.then(obj => {
          console.log("Dialog was closed OK");
          console.log(obj);
      }).catch(err => {
          console.log("Dialog was cancelled.");
          console.log(err);
      });
  }


  editSeller() {
      const modalInstance = this.modalService.open(EditSellerDlgComponent);
      modalInstance.componentInstance.sellerName = 'Gudmundur';
      modalInstance.result.then(obj => {
          console.log("Dialog was closed OK");
          console.log(obj);
      }).catch(err => {
          console.log("Dialog was cancelled.");
          console.log(err);
      });
  }

  ngOnInit() {

  }

}
