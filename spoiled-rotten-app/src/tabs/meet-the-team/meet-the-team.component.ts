import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-meet-the-team',
  imports: [CommonModule, RouterModule],
  templateUrl: './meet-the-team.component.html',
  styleUrl: './meet-the-team.component.css',
  standalone: true
})
export class MeetTheTeamComponent {
}
