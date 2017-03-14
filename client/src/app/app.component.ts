import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from './sellers.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Litla hryllings búðin';


  constructor() {}

  ngOnInit() {

  }

}
