import { Component, OnInit } from '@angular/core';
import { ServerService } from '../serverService';
// import { CourseIntroComponent } from '../course-intro/course-intro.component';

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
  optionIntro = [];
  courseIntro;
  changeIntro;

  constructor(private fetch: ServerService) {
   }

  ngOnInit() {
    this.fetch.getIntroTitle().subscribe((data) => {
      for (const i of data) {
        this.optionIntro.push(i.title);
      }
      }, (error) => console.log('Error'));

    this.fetch.getCourses().subscribe((data) => {
      for (const i of data) {
        if (this.fetch.selectCourse === i._id ) {
          for (const j of i.modules) {
          this.name = i.courseName;
          this.moduleName.push(j.moduleName);
          this.option.push(j);
        }
        this.courseIntro = i.courseIntro;
        }
      }
      }, (error) => console.log('Error'));
  console.log(this.courseIntro);
  console.log(this.fetch.selectCourse);
  }

  initializeCourseData(data) {
    for (const course of data) {
      this.data.push(course);
    }
  }

  saveChanges() {
    const changeCourseIntro = {
      // _id: this.fetch.selectCourse,
      courseIntro: this.courseIntro,
    };
    this.fetch.changeIntroVar = changeCourseIntro;
    this.fetch.changeIntroFun(this.fetch.selectCourse, changeCourseIntro).subscribe((data) => {
    }, (error) => console.log('Error'));
  }
}
