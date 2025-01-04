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
  teamMembers = [
    { name: 'Rebecca', role: 'Owner', bio: 'Been in the industry 10 years. Master Groomer 9000. Fear-Free and ServSafe certified.' },
    { name: 'Drake', role: 'CDO', bio: 'Been in the industry 0 years. Novice Groomer 0001. Fearful of dogs and no longer ServSafe Certified' },
    { name: 'Brisket', role: 'Head of Security', bio: '2 years of security expertise under his belt. 11 Months seizure free.' },
  ];
}
