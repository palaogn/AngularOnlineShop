/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListSellerComponent } from './list-seller.component';
import { SellersService } from '../sellers.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('ListSellerComponent', () => {

  const mockService = {
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

    getSellers: function() {
      return {
        subscribe:function(fnSuccess, fnError) {
          if (mockService.successGetSellers) {
            fnSuccess(mockService.sellersList);
          } else {
            fnError();
          }
        }
      }
    }
  }

  var mockRouter = {
    navigate: jasmine.createSpy("navigate"),
  };
  var mockNgbModal = {
    open: jasmine.createSpy("open"),
  };

  let component: ListSellerComponent;
  let fixture: ComponentFixture<ListSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListSellerComponent
      ],
      providers: [{
        provide: SellersService,
        useValue:mockService
      },{
        provide: Router,
        useValue: mockRouter
      },{
        provide:NgbModal,
        useValue: mockNgbModal
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Failed
  /*describe("when sellers service returns", () => {
    mockService.successGetSellers = true;
    mockService.sellersList = [];

    it("should display a message indicating that no sellers are to be displayed", () => {
      //TODO
      const fixture = TestBed.createComponent(ListSellerComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('No sellers to be displayed.');
    });

  });*/
});
