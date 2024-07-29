import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: string[] = [];

  constructor() {}

  addData(item: string) {
    this.data.push(item);
  }

  getData(): string[] {
    return this.data;
  }

  clearData() {
    this.data = [];
  }
}
