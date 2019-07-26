import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgEletricaPage } from './pg-eletrica.page';

describe('PgEletricaPage', () => {
  let component: PgEletricaPage;
  let fixture: ComponentFixture<PgEletricaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgEletricaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgEletricaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
