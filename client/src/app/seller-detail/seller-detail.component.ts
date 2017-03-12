import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../sellers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-detail',
  templateUrl: './seller-detail.component.html',
  styleUrls: ['./seller-detail.component.css']
})
export class SellerDetailComponent implements OnInit {
  sellerId: number;
  private sellers: Seller[];
  private seller: Seller;

  constructor(private service: SellersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    var successHandler = (result) => {
      this.seller = result;
    }
    var errorHandler = (err) => {
      //TODO: display toastr!
      console.log("Something failed");
    }

    this.sellerId = this.route.snapshot.params['sellerId'];

    this.service.getSellerById(this.sellerId).subscribe(result => {
      this.seller = result;
    });
    
  }

  onGoBack() {
    this.router.navigate(['/sellers']);
  }

}
