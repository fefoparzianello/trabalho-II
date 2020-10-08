import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessorioPesquisaComponent } from './acessorio-pesquisa.component';

describe('AcessorioPesquisaComponent', () => {
  let component: AcessorioPesquisaComponent;
  let fixture: ComponentFixture<AcessorioPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessorioPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessorioPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
