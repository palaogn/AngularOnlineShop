import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../sellers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-seller',
  templateUrl: './list-seller.component.html',
  styleUrls: ['./list-seller.component.css']
})
export class ListSellerComponent implements OnInit {
  private sellers: Seller[];
  private seller: Seller;

  constructor(private service: SellersService,
    private router: Router) { }

  ngOnInit() {
    var successHandler = (result) => {
      this.sellers = result;
    }
    var errorHandler = (err) => {
      //TODO: display toastr!
      console.log("Something failed");
    }

    this.service.getSellers().subscribe(result => {
      this.sellers = result;
    });

  }

  onClickOnSeller(sellerId) {
    this.router.navigate(['sellers', sellerId]);
  }

}
