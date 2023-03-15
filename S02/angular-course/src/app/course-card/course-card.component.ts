import { Course } from '../model/course';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course

  @Output()
  courseSelected = new EventEmitter<Course>()

  constructor() { }

  ngOnInit(): void {
  }

  viewCourceClicked() {
    this.courseSelected.emit(this.course)
  }
}
