import { Component, OnInit } from '@angular/core';
import { ServerService } from '../serverService';

@Component({
  selector: 'app-module-page',
  templateUrl: './module-page.component.html',
  styleUrls: ['./module-page.component.scss']
})
export class ModulePageComponent implements OnInit {
  option = [];
  data = [];
  name;
  constructor(private serverService: ServerService) {
   }

  ngOnInit() {
    this.serverService.getCourses().subscribe((data) => {
      for (const i of data) {
        if (this.serverService.selectCourse === i._id ) {
          for (const j of i.modules) {
          this.name = i.courseName;
            this.option.push(j);
          }
        }
      }
      }, (error) => console.log('Error'));
  }

  initializeCourseData(data) {
    for (const course of data) {
      this.data.push(course);
    }
  }

}
