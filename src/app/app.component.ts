import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from "./Views/Components/navbar/navbar.component";
import { HomeComponent } from "./Views/Components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatIconModule, NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pasteleria-magnus';
}
