import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-now',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.css',
  standalone: true
})
export class BookNowComponent {

}
