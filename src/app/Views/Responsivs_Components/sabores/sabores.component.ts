import { Component } from '@angular/core';

@Component({
  selector: 'app-sabores',
  standalone: true,
  templateUrl: './sabores.component.html',
  styleUrls: ['./sabores.component.scss']
})
export class SaboresComponent {
  currentIndex = 0;
  totalSlides = 2; // Número total de tarjetas

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
}
