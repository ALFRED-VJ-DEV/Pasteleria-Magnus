import { Component } from '@angular/core';
import { BotonAcerPedidoComponent } from "../../Components/boton-acer-pedido/boton-acer-pedido.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [BotonAcerPedidoComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
