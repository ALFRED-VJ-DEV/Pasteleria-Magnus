import { Component } from '@angular/core';
import { BotonAcerPedidoComponent } from '../../boton-acer-pedido/boton-acer-pedido.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sabores',
  standalone: true,
  imports: [
    BotonAcerPedidoComponent,
    MatIconModule,
  ],
  templateUrl: './sabores.component.html',
  styleUrl: './sabores.component.scss'
})
export class SaboresComponent {

}
