import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'home-tab-container',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './home-tab-container.component.html',
  styleUrl: './home-tab-container.component.css',
  standalone: true
})
export class HomeTabContainerComponent {

}
