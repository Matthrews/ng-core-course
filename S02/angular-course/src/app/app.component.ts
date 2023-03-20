import { Component } from '@angular/core';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    courses = COURSES;
    course = COURSES[1];
    title = COURSES[1].description;
    price = 9.99345667;
    startDate = new Date(2000, 0, 1);

    onCourseSelected($event) {
      console.log('onCourseSelected', $event);
    }
}
