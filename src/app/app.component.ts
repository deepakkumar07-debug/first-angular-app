import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    console.log('App Component Constructor Called.');
  }

  products = [
    { name: 'Laptop', price: 999 },
    { name: 'Smartphone', price: 499 },
    { name: 'Tablet', price: 299 },
  ];
}
