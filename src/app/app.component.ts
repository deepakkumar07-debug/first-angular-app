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

  isHide: boolean = true;

  toggleHeaderComponent() {
    this.isHide = !this.isHide;
  }
}
