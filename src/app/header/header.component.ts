import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'hammerjs';
import { HttpHeaders } from '@angular/common/http';
import { ServerService } from '../serverService';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  mainQuizCat;
  data;
  fData;
  data1;
  optionIntro = [];
  mainQuiz: any = {};
  mainQuizTitle;
  mainQuizDescription;
  mainQuizDetails;
  introTitle;
  option = [];
  hide = true;
  category;
  ima = false;
  formData: FormData;
  quizImage;
  model = {
    intro: ''
  };
  data2;
  url;

  constructor(private http: HttpClient, private serverService: ServerService, private router: Router) {
  }
  ngOnInit(): void {
    this.url = this.serverService.rootURL;
    this.serverService.getCourses().subscribe((data) => this.initializeCourseData(data), (error) => console.log('Error'));
    this.serverService.getIntroTitle().subscribe((data) => {
      for (const i of data) {
        this.optionIntro.push(i.title);
      }
    }, (error) => console.log('Error'));
    console.log(this.optionIntro);
    // this.serverService.getmainQuiz().subscribe((data) => {
    //   for (const i of data) {
    //     this.option.push(i);
    //   }
    // }, (error) => console.log('Error'));
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
    this.http.post(this.url + 'api/game', this.formdata).subscribe(
      (response: Response) => {
        console.log(response);
      });
  }
  onSubmit(form: NgForm) {
    console.log(this.model);
    this.serverService.AddMainQuiz(form.value).subscribe((data) => {
    }, (error) => console.log('Error'));
    this.router.navigate(['/quiz']);
  }
  mediaChg() {
    this.ima = true;
    console.log('aksd');
  }

  hideCategory() {
    if (this.category === 'Create New') {
      this.hide = false;
    }
  }

}

interface UserResponse {
  login: string;
  bio: string;
  company: string;
}
