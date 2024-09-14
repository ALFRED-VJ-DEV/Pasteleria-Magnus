import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { MenuResponsiveService } from '../../Services/menu-responsive.service';

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

  private subscriptions: Subscription[] = [];

  constructor(
    private menuResponsiveService: MenuResponsiveService,
  ) { }
  ngOnInit(): void {
    this.subscriptions.push(
      this.menuResponsiveService.optionSelected$.subscribe(v => {
        console.table({VALUES_: v})
        v.forEach((v, i) => {
          if(i == 0) {
            this.showNameBakery = v;
            this.menuResponsiveService.setshowNameBakery(v);
          }
          if(i == 1) {
            this.showFlavors = v;
            this.menuResponsiveService.setshowFlavors(v);
          }
          if(i == 2) {
            this.showPrices = v;
            this.menuResponsiveService.setshowPrices(v);
          }
          if(i == 3) {
            this.showOrder = v;
            this.menuResponsiveService.setshowOrder(v);
          }
        })
       })
    );

  }
  changeShowMenuBefore() {
    const values = [this.showNameBakery, this.showFlavors, this.showPrices, this.showOrder];//t, f ,f, f
    const value = values.shift();
    console.log({values, value})
    if(value === false || value == true) values.push(value)
    this.menuResponsiveService.changeOption(values);
  }
  changeShowMenuNext() {
    const values = [this.showNameBakery, this.showFlavors, this.showPrices, this.showOrder];//t, f ,f, f
    const value = values.pop();
    console.log({values, value})
    if(value === false || value == true) values.unshift(value)
    this.menuResponsiveService.changeOption(values);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
