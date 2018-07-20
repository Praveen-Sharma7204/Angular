import { Component, OnInit } from '@angular/core';
import { ServerService } from '../serverService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  course;
  selectedCourse;
  data = [];

  constructor(private serverService: ServerService, private router: Router) {
  }

  ngOnInit() {
    this.serverService.getCourses().subscribe((data) => this.initializeCourseData(data), (error) => console.log('Error'));
  }
  initializeCourseData(data) {
    for (const course of data) {
      // console.log(this.selectedCourse);
      this.data.push(course);
    }
  }
  selectCourse(id)  {
    this.router.navigate(['/module']);
    this.serverService.selectCourse = id;

  }

}
