import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  showNameBakery: boolean = true;
  showFlavors: boolean = false;
  showPrices: boolean = false;
  showOrder: boolean = false;

  changeShowMenuBefore() {
    const values = [this.showNameBakery, this.showFlavors, this.showPrices];
    const newValues = [];

    const indexTrue = values.findIndex(e => e == true);
    console.log({ indexTrue })
    switch (indexTrue) {
      case 0:
        this.showNameBakery = false;
        this.showFlavors = false;
        this.showPrices = false;
        this.showOrder = true;
        break;
      case 1:
        this.showNameBakery = true;
        this.showFlavors = false;
        this.showPrices = false;
        this.showOrder = false;
        break;
      case 2:
        this.showNameBakery = false;
        this.showFlavors = true;
        this.showPrices = false;
        this.showOrder = false;
        break;

      default:
        this.showNameBakery = false;
        this.showFlavors = false;
        this.showPrices = true;
        this.showOrder = false;
        break;
    }
  }
  changeShowMenuNext() {
    const values = [this.showNameBakery, this.showFlavors, this.showPrices];
    const newValues = [];

    const indexTrue = values.findIndex(e => e == true);
    console.log({ indexTrue })
    switch (indexTrue) {
      case 0:
        this.showNameBakery = false;
        this.showFlavors = true;
        this.showPrices = false;
        this.showOrder = false;
        break;
      case 1:
        this.showNameBakery = false;
        this.showFlavors = false;
        this.showPrices = true;
        this.showOrder = false;
        break;
      case 2:
        this.showNameBakery = false;
        this.showFlavors = false;
        this.showPrices = false;
        this.showOrder = true;
        break;

      default:
        this.showNameBakery = true;
        this.showFlavors = false;
        this.showPrices = false;
        this.showOrder = false;
        break;
    }
  }
}
