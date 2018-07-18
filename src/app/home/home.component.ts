import { Component, OnInit } from '@angular/core';
import { ServerService } from '../serverService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  course;
  data = [
  ];

  constructor(private serverService: ServerService) {
    console.log('hello world');
  }

  ngOnInit() {
    this.serverService.getCourses().subscribe((data) => this.initializeCourseData(data), (error) => console.log('Error'));
  }
  initializeCourseData(data) {
    console.log(data);
    for (const course of data) {
      this.data.push(course);
    }
  }

}
