import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoPesquisaComponent } from './veiculo-pesquisa.component';

describe('VeiculoPesquisaComponent', () => {
  let component: VeiculoPesquisaComponent;
  let fixture: ComponentFixture<VeiculoPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
