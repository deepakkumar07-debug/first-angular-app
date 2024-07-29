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

  products: any = [
    { name: 'Laptop', price: 999 },
    { name: 'Smartphone', price: 499 },
    { name: 'Tablet', price: 299 },
  ];

  isHide: boolean = true;
  isLike: boolean = false;

  toggleParagraph() {
    this.isHide = !this.isHide;
  }

  toggleLike() {
    this.isLike = !this.isLike;
  }
  courses = ['C', 'C++'];
  // courses=[];
  viewMode = 'home';

  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
