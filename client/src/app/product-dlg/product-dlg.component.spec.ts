/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductDlgComponent } from './product-dlg.component';


import { SellersService } from '../sellers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('ProductDlgComponent', () => {

  const mockService = {
    successPostProduct: true,
    sellersList: [{
      id: 1,
      name: "test seller",
      category: "test category",
      imagePath: "img path"
    }],

    postProduct: function() {
      return {
        subscribe:function(fnSuccess, fnError) {
          if (mockService.successPostProduct) {
            fnSuccess();
          } else {
            fnError();
          }
        }
      }
    }
  }

  var mockRouter = {

  };
  var mockActiveRouter = {

  };
  var mockNgbActiveModal = {
    close: jasmine.createSpy("close"),
  };

  let component: ProductDlgComponent;
  let fixture: ComponentFixture<ProductDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductDlgComponent
      ],
      providers: [{
        provide: SellersService,
        useValue:mockService
      },{
        provide: Router,
        useValue: mockRouter
      },{
        provide:NgbActiveModal,
        useValue: mockNgbActiveModal
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Fails
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
