import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgPesquisarPage } from './pg-pesquisar.page';

describe('PgPesquisarPage', () => {
  let component: PgPesquisarPage;
  let fixture: ComponentFixture<PgPesquisarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgPesquisarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgPesquisarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
