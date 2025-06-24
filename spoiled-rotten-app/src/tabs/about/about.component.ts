import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true
})
export class AboutComponent {

}
