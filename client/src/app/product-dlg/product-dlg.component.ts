import { Component, OnInit } from '@angular/core';
import { SellersService, Product } from '../sellers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-dlg',
  templateUrl: './product-dlg.component.html',
  styleUrls: ['./product-dlg.component.css']
})
export class ProductDlgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
