import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // dependency injection at constructor
  constructor(private dataService: DataService) {}
  newItem: string = '';
  items: string[] = [];

  addItem() {
    if (this.newItem) {
      this.dataService.addData(this.newItem);
      this.newItem = '';
      this.updateItems();
    }
  }

  updateItems() {
    this.items = this.dataService.getData();
  }

  clearItems() {
    this.dataService.clearData();
    this.updateItems();
  }
}
