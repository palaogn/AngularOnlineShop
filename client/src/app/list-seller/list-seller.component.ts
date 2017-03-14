import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../sellers.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SellerDlgComponent } from '../seller-dlg/seller-dlg.component';

@Component({
  selector: 'app-list-seller',
  templateUrl: './list-seller.component.html',
  styleUrls: ['./list-seller.component.css']
})
export class ListSellerComponent implements OnInit {
  private sellers: Seller[];
  private seller: Seller;

  constructor(private service: SellersService,
              private router: Router,
              private modalService: NgbModal) { }

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


  ngOnInit() {
    const successHandler = (result) => {
      this.sellers = result;
    };

    const errorHandler = (err) => {
      // TODO: display toastr!
      console.log('Something failed');
    };

    this.service.getSellers().subscribe(result => {
      this.sellers = result;
    });

  }

  onClickOnSeller(sellerId) {
    this.router.navigate(['sellers', sellerId]);
  }

}
