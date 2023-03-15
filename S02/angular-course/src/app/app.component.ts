import { Component } from '@angular/core';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    coreCouse = COURSES[0]
    rxjsCouse = COURSES[1]
    ngrxCouse = COURSES[2]

    onCourseSelected($event) {
      console.log('onCourseSelected', $event);
    }
}
