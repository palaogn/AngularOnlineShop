import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements OnInit {

  product: string;

  constructor() { }

  ngOnInit() {
  }

}

/*
@Component({
    selector: 'app-product-card' ...})
export class ProductCard {

    @Input()
    product: Product;
} */
