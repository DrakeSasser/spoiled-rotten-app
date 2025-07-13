import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'faq',
  imports: [CommonModule, RouterModule, MatExpansionModule, MatCardModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
  standalone: true
})
export class FaqComponent {
  faqs = [
    {
      question: 'What vaccines do you require?',
      answer: 'For our grooming clients, rabies is the only vaccine we require. It is state law that your pet must be vaccinated against rabies before recieving any services servies. We must see proof of vaccination on vet letterhead, simply bringing in the tag will not suffice.' 
      + '<br><br>' 
      + 'For our boarding clients we require the following vaccines:' +'<br>' 
      + '<strong>1. Valid Rabies vaccination certificate as descirbed above</strong>' + '<br>' 
      + '<strong>2. Valid DHLPP vaccination certificate<strong>' + '<br>' 
      + '<strong>3. Valid Bordetella vaccination certificate<strong>'
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
      answer: 'Boarding checkout is between 8:30 am and 12:00pm. A daycare charge of $15 will be added for a pick up after 12pm. Any pet pick-up or drop-off that does not occur during our regular business hours must be arranged by appointment. A $25 service charge will also be added to your guest invoice for appointment-based pickup.'
    },
    {
      question: 'Will my pet have potty issues if they are going inside during boarding?',
      answer: 'At our indoor pet resort, housebreaking habits are not a concern because we use artificial turf, effectively creating a large-scale grass litter box. This setup provides a natural, familiar surface for your pet to relieve themselves. To make it even easier, we use specially formulated pheromone cleaners that encourage your dog to potty only in the designated area, keeping the playroom clean and ensuring your pet follows proper bathroom habits when they go home.'
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
