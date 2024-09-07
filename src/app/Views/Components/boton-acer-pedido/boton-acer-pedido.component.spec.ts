import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAcerPedidoComponent } from './boton-acer-pedido.component';

describe('BotonAcerPedidoComponent', () => {
  let component: BotonAcerPedidoComponent;
  let fixture: ComponentFixture<BotonAcerPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonAcerPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonAcerPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
