import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor() {
    console.log('Header Component Constructor Called.');
  }

  ngOnInit(): void {
    console.log('ngOnInit() is called');
  }
  ngOnDestroy() {
    console.log('Component is being destroyed');
  }
}
