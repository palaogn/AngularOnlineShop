import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from './sellers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Online Shop!';

  private sellers: Seller[];
  private seller: Seller;

  constructor(private service: SellersService) {}

  ngOnInit() {
    var successHandler = (result) => {
      this.seller = result;
    }

    var errorHandler = (err) => {
      //TODO: display toastr!
      console.log("Something failed");
    }

    //Get seller by id, this one is hardcoded with nr.2
    this.service.getSellerById(2).subscribe(successHandler, errorHandler);

    this.service.getSellers().subscribe(result => {
      this.sellers = result;
    });


  }

}
