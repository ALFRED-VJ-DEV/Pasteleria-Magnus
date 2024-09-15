import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendWhatsappService {
  private phone:string = '+525579947397';
  private message:string = 'Hola soy tu app'


  constructor() { }

  sendMessage(){
    const encodedMessage = encodeURIComponent(this.message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${this.phone}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }
}
