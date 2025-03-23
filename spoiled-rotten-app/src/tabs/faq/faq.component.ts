import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, RouterModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
  standalone: true
})
export class FaqComponent {
  faqs = [
    {
      question: 'What vaccines do you require?',
      answer: 'Rabies is the only vaccine we require. It is state law that your pet must be vaccinated against rabies before recieving servies. We must see proof of vaccination on vet letterhead, simply bringing in the tag will not suffice.'
    },
    {
      question: 'How can I book an appointment?',
      answer: 'You can book online using the button on this page or call us at 256-867-5309'
    },
    {
      question: 'Do you offer overnight stays?',
      answer: 'Yes! We offer day-time play-time stays for your dog as well as overnight stays at in our spacious overnight boarding rooms.'
    },
    {
      question: 'When can I drop off and pick up my dog?',
      answer: 'TBD'
    }
  ];

  openIndex: number | null = null;

  toggleAccordion(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isOpen(index: number): boolean {
    return this.openIndex === index;
  }
}
