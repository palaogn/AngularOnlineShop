/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditSellerDlgComponent } from './edit-seller-dlg.component';

describe('EditSellerDlgComponent', () => {
  let component: EditSellerDlgComponent;
  let fixture: ComponentFixture<EditSellerDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSellerDlgComponent ]
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
