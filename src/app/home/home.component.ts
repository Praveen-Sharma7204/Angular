import { Component, OnInit } from '@angular/core';
import { ServerService } from '../serverService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  course;
  selectedCourse;
  data = [];

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
    this.serverService.getCourses().subscribe((data) => this.initializeCourseData(data), (error) => console.log('Error'));
  }
  initializeCourseData(data) {
    for (const course of data) {
      // this.selectedCourse = data._id;
      // console.log(this.selectedCourse);
      this.data.push(course);
    }
  }

}
