import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPaginatedProducts, IProduct } from './shared/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Skinet';
}
