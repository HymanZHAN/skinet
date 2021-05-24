import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss'],
})
export class TestErrorComponent {
  baseUrl = `${environment.apiUrl}/buggy`;
  validationErrors: unknown[] = [];

  constructor(private http: HttpClient) {}

  get404Error() {
    this.http.get(`${this.baseUrl}/notfound`).subscribe(
      (resp) => {
        console.log(resp);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  get400ValidationError() {
    this.http.get(`${this.baseUrl}/badrequest/fortytwo`).subscribe(
      (resp) => {
        console.log(resp);
      },
      (error) => {
        this.validationErrors = error.errors;
        console.error(error);
      }
    );
  }

  get400Error() {
    this.http.get(`${this.baseUrl}/badrequest`).subscribe(
      (resp) => {
        console.log(resp);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  get500Error() {
    this.http.get(`${this.baseUrl}/servererror`).subscribe(
      (resp) => {
        console.log(resp);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
