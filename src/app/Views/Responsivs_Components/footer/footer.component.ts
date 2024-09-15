import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SendWhatsappService } from '../../Services/send-whatsapp.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
email:string = "pasteleria.magnus@gmail.com";

constructor(
  private sendWhatsappService: SendWhatsappService
){}
sendMessage(typeCacke: string){
  this.sendWhatsappService.sendMessage(typeCacke);
}
}
