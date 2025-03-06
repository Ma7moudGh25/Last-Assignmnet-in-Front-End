import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Features/layout/navbar/navbar.component";
import { RegisterComponent } from "./Features/layout/register/register.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce';
}
