/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {

  var mockNgbModal = {
    open: jasmine.createSpy("open"),
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
         RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [ {
        provide: NgbModal,
        useValue: mockNgbModal
      }],
    });
    TestBed.compileComponents();
  });

  //Succeeds
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  //Succeeds
  it(`should have as title 'Litla hryllingsbúðin'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Litla hryllingsbúðin');
  }));

  //Succeeds
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Litla hryllingsbúðin');
  }));
});
