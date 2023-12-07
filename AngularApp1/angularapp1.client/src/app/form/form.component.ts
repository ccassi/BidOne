import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private http: HttpClient) { }  // Inject HttpClient

  formData: { firstName: string, lastName: string } = { firstName: '', lastName: '' };

  onSubmit(): void {
    // Send the form data to the backend
    console.log('Form Data:', this.formData);
    this.http.post('http://localhost:5000/api/form', this.formData).subscribe(
      response => {
        console.log(response);
        alert('Data saved successfully');
      },
      error => {
        console.error(error);
        alert('Failed to save data');
      }
    );
  }
}
