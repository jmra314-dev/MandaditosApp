import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugstorePage } from './drugstore.page';

describe('DrugstorePage', () => {
  let component: DrugstorePage;
  let fixture: ComponentFixture<DrugstorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugstorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugstorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
