import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Seller {
  id: number;
  name: string;
  category: string;
  imagePath: string;
}

export interface Product {
  id: number,
  name: string,
  price: number,
  quantitySold: number,
  quantityInStock: number,
  imagePath: string
}

@Injectable()
export class SellersService {

  constructor(private http: Http) { }


  //  The following APIs are available:
  //
  //  GET - /api/sellers
  //  Returns a list of sellers
  //  POST - /api/sellers
  //  Adds a new seller to the service. Note: the "name" property is required, "category" and "imagePath" should be provided as well, but are optional.
  //  GET - /api/sellers/:id
  //  Returns a single seller by id. Returns 404 if no such seller is found.
  //  GET  - /api/sellers/:id/products
  //  Returns all products from a given seller. Returns 404 if the seller is not found.
  //  POST - /api/sellers/:id/products
  //  Adds a new product to the given seller. Returns 404 if no seller with the given id is found. Note that the name of the product is required.
  //  PUT - /api/sellers/:id
  //  Updates seller information.
  //  PUT - /api/sellers/:id/products/:prodId
  //  Updates product information

  //  POST - /api/sellers
  postSeller(seller: Seller): Observable<Seller[]> {
    return this.http.post(`http://localhost:5000/api/sellers/`, seller)
    .map(response => {
      return <Seller[]> response.json();
    });
  }

  postProduct(product: Product, sellerId: number): Observable<Product[]> {
    return this.http.post(`http://localhost:5000/api/sellers/${sellerId}/products`, product)
    .map(response => {
      return <Product[]> response.json();
    });
  }

  getSellers(): Observable<Seller[]> {
    return this.http.get('http://localhost:5000/api/sellers')
    .map(response => {
      return <Seller[]> response.json();
    });
  }

  //  GET - /api/sellers/:id
  //  Returns a single seller by id. Returns 404 if no such seller is found.
  getSellerById(id: number): Observable<Seller> {
    return this.http.get(`http://localhost:5000/api/sellers/${id}/`)
    .map(response => {
      return <Seller> response.json();
    });
  }

  getProductsBySellerId(id: number): Observable<Product[]> {
    return this.http.get(`http://localhost:5000/api/sellers/${id}/products/`)
    .map(response => {
      return <Product[]> response.json();
    });
  }

    updateInfoForSeller(id: number, updatedSeller: Seller): Observable<void> {
    console.log(updatedSeller);
    return this.http.put(`http://localhost:5000/api/sellers/${id}`, updatedSeller)
    .map(response => {
        response.json();
    });
  }

  updateProduct(sellerId: number, product: Product): Observable<void> {
    return this.http.put(`http://localhost:5000/api/sellers/${sellerId}/products/${product.id}/`, product)
    .map(response => {
      response.json();
    });
  }

}
