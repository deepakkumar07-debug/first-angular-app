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

  username = 'Deepak';
  imageUrl: string =
    'https://angular.io/assets/images/logos/angular/angular.png';

  greet() {
    alert('Hello, Angular!');
  }
}
