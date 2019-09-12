import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessPage } from './bussiness.page';

describe('BussinessPage', () => {
  let component: BussinessPage;
  let fixture: ComponentFixture<BussinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
