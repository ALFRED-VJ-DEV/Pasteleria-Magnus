import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendWhatsappService {
  private phone:string = '+525579947397';
  private message:string = 'Hola Puedes darme información de '


  constructor() { }

  sendMessage(typeCacke: string){
    const encodedMessage = encodeURIComponent(this.message + typeCacke);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${this.phone}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }
}
