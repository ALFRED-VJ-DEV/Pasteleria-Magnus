import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuResponsiveService {
  private showNameBakerySubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  showNameBakery$ = this.showNameBakerySubject.asObservable();

  private showFlavorsSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showFlavors$ = this.showFlavorsSubject.asObservable();

  private showPricesSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showPrices$ = this.showPricesSubject.asObservable();

  private showOrderSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showOrder$ = this.showOrderSubject.asObservable();

  private optionSelectedSubject: BehaviorSubject<boolean[]> = new BehaviorSubject<boolean[]>([true, false, false, false])
  optionSelected$ = this.optionSelectedSubject.asObservable();
  constructor() { }

  setshowNameBakery(value: boolean){
    this.showNameBakerySubject.next(value);
  }
  setshowFlavors(value: boolean){
    this.showFlavorsSubject.next(value);
  }
  setshowPrices(value: boolean){
    this.showPricesSubject.next(value);
  }
  setshowOrder(value:boolean){
    this.showOrderSubject.next(value);
  }

  changeOption(value:boolean[]){
    this.optionSelectedSubject.next(value);
  }
}
