import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'contact',
  imports: [CommonModule, FormsModule, RouterModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatListModule, MatProgressSpinnerModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  standalone: true
})
export class ContactComponent {

  public formData = {
    access_key:'4190eff6-9132-40ed-adf0-78b1c3aa59da',
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  public isLoading = false;
  public isSubmitted = false;

  constructor(protected httpClient: HttpClient)
  {

  }

  public sendEmail(): void {
    // Validate required fields
    if (!this.isFormValid()) {
      return; // Don't proceed if form is invalid
    }

    this.isLoading = true;
    this.httpClient.post('https://api.web3forms.com/submit', this.formData).subscribe({
        next: response => {
          console.log('Success:', response);
          this.isLoading = false;
          this.isSubmitted = true;
        },
        error: error => {
          console.error('Error:', error);
          this.isLoading = false;
        }
      });
  }

  private isFormValid(): boolean {
    // Check if required fields are filled
    return !!(this.formData.name && 
              this.formData.email && 
              this.formData.message);
  }
}
