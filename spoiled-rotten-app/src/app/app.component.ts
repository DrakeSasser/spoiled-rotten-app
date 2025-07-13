import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaqComponent } from '../tabs/faq/faq.component';
import { ContactComponent } from "../tabs/contact/contact.component";
import { AboutComponent } from "../tabs/about/about.component";
import { BookNowComponent } from "../tabs/book-now/book-now.component";
import { MeetTheTeamComponent } from "../tabs/meet-the-team/meet-the-team.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FaqComponent, 
    ContactComponent, 
    AboutComponent, 
    BookNowComponent, 
    MeetTheTeamComponent, 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatDividerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spoiled-rotten-app';
  isHandset$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openBookingLink(): void {
    window.open('https://pawpartner.com/pz/book?p=2174788', '_blank');
  }
}
