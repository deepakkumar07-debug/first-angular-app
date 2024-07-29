import { Component } from '@angular/core';
import { DataService } from './data.service';
import { ActivitiesService } from './activities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // dependency injection at constructor
  constructor(private activityService: ActivitiesService) {}
  data: any[] = [];

  ngOnInit() {
    this.activityService.getData().subscribe((response) => {
      this.data = response;
    });
  }

  newActivity = {
    id: this.data.length + 1,
    title: '',
    dueDate: '',
    completed: false,
  };
  addActivity() {
    // Convert completed to boolean
    this.newActivity.completed =
      (this.newActivity.completed as unknown) === 'true';

    this.activityService.addData(this.newActivity).subscribe((response) => {
      this.data.unshift(response);
      this.resetForm();
    });
  }

  resetForm() {
    this.newActivity = {
      id: 0,
      title: '',
      dueDate: '',
      completed: false,
    };
  }

  updatedItem = {
    id: 1, // The ID of the item to update
    title: 'Updated Title',
    dueDate: new Date().toISOString(),
    completed: true,
  };

  updateItem() {
    this.activityService.updateData(this.updatedItem).subscribe((response) => {
      let index = this.data.findIndex(
        (activity) => activity.id == this.updatedItem.id
      );
      // update the response
      this.data.splice(index, 1, response);
    });
  }

  handleUpdate(data: any) {
    this.updatedItem.id = data.id;
    this.updateItem();
  }

  deleteItem(id: number) {
    this.activityService.deleteData(id).subscribe((response) => {
      this.data = this.data.filter((item) => item.id !== id);
    });
  }
}
