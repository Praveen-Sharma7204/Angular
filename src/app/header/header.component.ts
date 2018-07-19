import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'hammerjs';
import { HttpHeaders } from '@angular/common/http';
import { ServerService } from '../serverService';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'header/json',
  })
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
// export class HeaderComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

export class HeaderComponent implements OnInit {
  title = 'header';
  constructor(private http: HttpClient, private serverService: ServerService) {
  }
  ngOnInit(): void {
  this.serverService.getCourses().subscribe((data) => this.initializeCourseData(data), (error) => console.log('Error'));

}
  initializeCourseData(data) {
    for (const i of data) {
      this.serverService.courseData.push(i);
    }
  }
  initializeUserData(data) {
    for (const i of data) {
      this.serverService.userData.push(i);
    }
  }
}
interface UserResponse {
  login: string;
  bio: string;
  company: string;
}


