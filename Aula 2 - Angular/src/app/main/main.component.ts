import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, NavBarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
