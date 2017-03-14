import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from './sellers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SellerDlgComponent } from './seller-dlg/seller-dlg.component';

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

  ngOnInit() {

  }

}
