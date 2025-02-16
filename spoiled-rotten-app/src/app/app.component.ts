import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaqComponent } from '../tabs/faq/faq.component';
import { ContactComponent } from "../tabs/contact/contact.component";
import { AboutComponent } from "../tabs/about/about.component";
import { BookNowComponent } from "../tabs/book-now/book-now.component";
import { MeetTheTeamComponent } from "../tabs/meet-the-team/meet-the-team.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FaqComponent, ContactComponent, AboutComponent, BookNowComponent, MeetTheTeamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spoiled-rotten-app';

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
