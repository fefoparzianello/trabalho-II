import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessorioCadastroComponent } from './acessorio-cadastro.component';

describe('AcessorioCadastroComponent', () => {
  let component: AcessorioCadastroComponent;
  let fixture: ComponentFixture<AcessorioCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessorioCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessorioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
