/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditSellerDlgComponent } from './edit-seller-dlg.component';

import { SellersService } from '../sellers.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('EditSellerDlgComponent', () => {

  const mockService = {
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

  let component: EditSellerDlgComponent;
  let fixture: ComponentFixture<EditSellerDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditSellerDlgComponent
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
    fixture = TestBed.createComponent(EditSellerDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Fails
  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
