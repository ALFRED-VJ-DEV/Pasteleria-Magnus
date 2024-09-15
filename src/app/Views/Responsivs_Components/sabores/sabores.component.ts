import { Component, HostListener } from '@angular/core';
import { SendWhatsappService } from '../../Services/send-whatsapp.service';

@Component({
  selector: 'app-sabores',
  standalone: true,
  templateUrl: './sabores.component.html',
  styleUrls: ['./sabores.component.scss']
})
export class SaboresComponent {
  currentIndex = 0;
  totalSlides = 5; // Número total de tarjetas

  constructor(
    private sendWhatsappService: SendWhatsappService
  ){}
  @HostListener('window:swiperight', ['$event'])
  onSwipeRight(event: any) {
    this.prevSlide();
  }

  @HostListener('window:swipeleft', ['$event'])
  onSwipeLeft(event: any) {
    this.nextSlide();
  }

  nextSlide() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    carousel.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  prevSlide() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    carousel.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  sendMessage(typeCacke: string){
    this.sendWhatsappService.sendMessage(typeCacke);
  }
}
