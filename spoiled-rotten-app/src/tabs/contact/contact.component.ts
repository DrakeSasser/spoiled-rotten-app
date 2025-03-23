import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  standalone: true
})
export class ContactComponent {

  public formData = {
    access_key:'1458fc7c-ce78-42d5-ae54-b63d52dfd621',
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor(protected httpClient: HttpClient)
  {

  }

  public sendEmail(): void {
    console.log('Form Submitted!', this.formData);
    this.httpClient.post('https://api.web3forms.com/submit', this.formData).subscribe({
        next: response => console.log('Success:', response),
        error: error => console.error('Error:', error)
      });
  }
}
