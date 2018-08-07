import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'hammerjs';
import { HttpHeaders } from '@angular/common/http';
import { ServerService } from '../serverService';
import { NgForm } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'header/json',
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
  formdata;
  name;
  gameURL;
  data;
  fData;
  data1;
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

  onClick(form: NgForm) {
    this.data = document.getElementById('file');
    this.fData = form.value;
    this.data1 = this.data.files;
      this.formdata = new FormData();
      this.formdata.append('name', this.fData.name);
      this.formdata.append('gameURL', this.data1[0]);
      this.http.post('http://ec2-13-232-184-91.ap-south-1.compute.amazonaws.com:8080/api/game', this.formdata).subscribe(
        (response: Response) => {
          console.log(response);
        });
    }
  }
interface UserResponse {
  login: string;
  bio: string;
  company: string;
}


