import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgCadastroClientePage } from './pg-cadastro-cliente.page';

describe('PgCadastroClientePage', () => {
  let component: PgCadastroClientePage;
  let fixture: ComponentFixture<PgCadastroClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgCadastroClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgCadastroClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
