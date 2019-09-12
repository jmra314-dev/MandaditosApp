import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapUbicationPage } from './map-ubication.page';

describe('MapUbicationPage', () => {
  let component: MapUbicationPage;
  let fixture: ComponentFixture<MapUbicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapUbicationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapUbicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
