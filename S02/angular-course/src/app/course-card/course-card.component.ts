import { Course } from '../model/course';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course

  constructor() { }

  ngOnInit(): void {
  }

}
