import { Component } from '@angular/core';
import { BotonAcerPedidoComponent } from "../../Components/boton-acer-pedido/boton-acer-pedido.component";
import { SaboresComponent } from '../sabores/sabores.component';
import { OrderComponent } from "../order/order.component";
import { PricesComponent } from '../prices/prices.component';
import { MenuResponsiveService } from '../../Services/menu-responsive.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [BotonAcerPedidoComponent, SaboresComponent, OrderComponent, PricesComponent, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  showNameBakery: boolean = true;
  showFlavors: boolean = false;
  showPrices: boolean = false;
  showOrder: boolean = false;
  constructor(
    private menuResponsiveService: MenuResponsiveService
  ) { }

  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.subscriptions.push(
      this.menuResponsiveService.optionSelected$.subscribe(v => {
        v.forEach((v, i) => {
          if (i == 0) { this.showNameBakery = v; }
          if (i == 1) { this.showFlavors = v; }
          if (i == 2) { this.showPrices = v; }
          if (i == 3) { this.showOrder = v; }
        })
      })
    )
  }
}
