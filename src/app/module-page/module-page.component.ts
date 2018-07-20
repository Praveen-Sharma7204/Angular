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
  rowArrange = [];

  constructor() {
   }

  ngOnInit() {
    this.rowArrange.push(1, 2, 4, 5, 3);
    // this.serverService.getCourses().subscribe((data) => {
    //   // console.log(data);
    //   for(const i of data){
    //     this.option.push(i.modules);
    //     console.log(i.modules);
    //   }
    //   }, (error) => console.log('Error'));
    
  }

  // initializeCourseData(data) {
  //   for (const course of data) {
  //     this.data.push(course);
  //   }
  // }

}
