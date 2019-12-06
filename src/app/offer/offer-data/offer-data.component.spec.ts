import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OfferDataComponent} from './offer-data.component';

describe('OfferDataComponent', () => {
  let component: OfferDataComponent;
  let fixture: ComponentFixture<OfferDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
