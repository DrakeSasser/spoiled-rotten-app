import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeTabContainerComponent } from "../tabs/home-tab-container/home-tab-container.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeTabContainerComponent],
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
