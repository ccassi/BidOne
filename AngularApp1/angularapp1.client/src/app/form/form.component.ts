import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface FormData {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private http: HttpClient) { }  // Inject HttpClient

  formData: FormData = { firstName: '', lastName: '' };

  onSubmit(): void {
    // Send the form data to the backend
    console.log('Form Data:', this.formData);
    this.http.post('https://localhost:7090/Form', this.formData, { withCredentials: true })
      .subscribe(
        response => {
          console.log(response);
          alert('Data saved successfully');
        },
        error => {
          console.error('Error submmtting form:', error);
          if (error.error instanceof ErrorEvent) {
            console.error('Client-side error:', error.error.message);
          } else {
            console.error('Server-side error:', error.status, error.error);
          }
          alert('Failed to save data');
        }
      );
  }
}
