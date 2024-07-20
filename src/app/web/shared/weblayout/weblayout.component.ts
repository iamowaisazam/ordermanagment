import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-weblayout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './weblayout.component.html',
  styleUrl: './weblayout.component.css'
})
export class WeblayoutComponent {

}
