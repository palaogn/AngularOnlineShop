/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellerDlgComponent } from './seller-dlg.component';

import { SellersService } from '../sellers.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('SellerDlgComponent', () => {

  const mockService = {
    successPostSeller: true,
    successGetProducts: true,
    productsList: [{
      id: 1,
      name: "test product",
      price: 1,
      quantitySold: 1,
      quantityInStock: 1,
      imagePath: "string"
    }],
    successGetSellers: true,
    sellersList: [{
      id: 1,
      name: "test seller",
      category: "test category",
      imagePath: "img path"
    }],

    postSeller: function(seller) {
      return {
        subscribe:function(fnSuccess, fnError) {
          if (mockService.successPostSeller) {
            fnSuccess();
          } else {
            fnError();
          }
        }
      }
    }
  }

  var mockNgbActiveModal = {
    close: jasmine.createSpy("close"),
    dismiss: jasmine.createSpy("dismiss"),
  };

  let component: SellerDlgComponent;
  let fixture: ComponentFixture<SellerDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SellerDlgComponent
      ],
      providers: [{
        provide: SellersService,
        useValue:mockService
      },{
        provide:NgbActiveModal,
        useValue: mockNgbActiveModal
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Fails
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
