import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../sellers.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-seller-dlg',
  templateUrl: './edit-seller-dlg.component.html',
  styleUrls: ['./edit-seller-dlg.component.css']
})
export class EditSellerDlgComponent implements OnInit {

  private seller: Seller;
  //private newNameForSeller: string;
  //private newCategoryForSeller: string;
  private sellerName: string
  private categoryName: string;
  private sellerImage: string;
  private sellerId: number;


  constructor(private service: SellersService,
              private router: Router,
              private modalService: NgbActiveModal) { }

  ngOnInit() {
      this.seller = {id: undefined, name: "", category: "", imagePath: ""}
  }

  onClickSaveNewSeller() {
      this.seller.name = this.sellerName;
      this.seller.category = this.categoryName;
		  this.seller.imagePath = this.sellerImage;
      this.service.updateSeller(this.sellerId, this.seller).subscribe(succeeded => {
          this.modalService.close();
      });

  }
  onGoBack() {
      this.modalService.dismiss();
  }


}
