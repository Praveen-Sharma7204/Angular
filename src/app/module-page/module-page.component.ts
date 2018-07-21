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
  moduleName = [];

  constructor(private serverService: ServerService) {
   }

  ngOnInit() {
    this.serverService.getCourses().subscribe((data) => {
      for (const i of data) {
        if (this.serverService.selectCourse === i._id ) {
          for (const j of i.modules) {
          this.name = i.courseName;
          // this.moduleName.push(j.moduleName);
          this.option.push(j);
          console.log(j);
        }
        }
      }
      }, (error) => console.log('Error'));
      console.log(this.name);
  }

  initializeCourseData(data) {
    for (const course of data) {
      this.data.push(course);
    }
  }

}
