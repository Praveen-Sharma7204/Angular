import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { ServerService } from '../serverService';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-current-module',
  templateUrl: './current-module.component.html',
  styleUrls: ['./current-module.component.scss']
})
export class CurrentModuleComponent implements OnInit {
  name = true;
  list = false;
  name1 = true;
  list1 = false;
  name2 = true;
  list2 = false;
  data = [];
  optionIntro = [];
  optionGame = [];
  optionQuiz = [];
  quiz;
  game;
  intro;
  formdata;
  moduleName;
  formData;
  fdata;
  storeName;
  storeGame;
  storeIntro;
  storeQuiz;
  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
    this.serverService.getCourses().subscribe((data) => this.initializeCourseData(data), (error) => console.log('Error'));

    this.serverService.getQuiz().subscribe((data) => {
      for (const i of data) {
        this.optionQuiz.push(i);
      }
      }, (error) => console.log('Error'));

      this.serverService.getIntroTitle().subscribe((data) => {
        for (const i of data) {
          this.optionIntro.push(i.title);
        }
        }, (error) => console.log('Error'));

        this.serverService.getAllGames().subscribe((data) => {
          for (const i of data) {
            this.optionGame.push(i.name);
          }
          }, (error) => console.log('Error'));

  }

  initializeCourseData(data) {
    for (const course of data) {
      if (this.serverService.selectCourse === course._id) {
        for (const i of course.modules) {
          if ( i.moduleName === this.serverService.selectedModule)  {
            this.data = i;
            this.storeName = i.moduleName;
            this.storeGame = i.name;
            this.storeIntro = i.introTitle;
            this.storeQuiz = i.quizCategory;
          }
        }
      }
    }
  }
  saveChangesDEL() {
    this.serverService.delModule(this.serverService.selectCourse)
    .subscribe((data) => {
    }, (error) => console.log('Error'));
  }

  changeName(a, value) {
    // if (value === 'module')  {
      this.serverService.changeModule(this.serverService.selectCourse, this.storeName, a).subscribe((data) => {
      }, (error) => console.log('Error'));
  //  }
  //  if (value === 'intro')  {
  //    this.serverService.changeModule(this.serverService.selectCourse, this.storeName, a, value).subscribe((data) => {
  //    }, (error) => console.log('Error'));
  //  }
  //   if (value === 'game')  {
  //       this.serverService.changeModule(this.serverService.selectCourse, this.storeName, a, value).subscribe((data) => {
  //       }, (error) => console.log('Error'));
  //  }
  //   if (value === 'quiz')  {
  //     this.serverService.changeModule(this.serverService.selectCourse, this.storeName, a, value).subscribe((data) => {
  //     }, (error) => console.log('Error'));
  //  }
  }

  // for hiding and unhiding EDIT-bar
  edit() {
    if (this.name === true) {
      this.name = false;
      this.list = true;
    }
  }
  redo() {
    if (this.list === true) {
      this.name = true;
      this.list = false;
    }
  }
  edit1() {
    if (this.name1 === true) {
      this.name1 = false;
      this.list1 = true;
    }
  }
  redo1() {
    if (this.list1 === true) {
      this.name1 = true;
      this.list1 = false;
    }
  }
  edit2() {
    if (this.name2 === true) {
      this.name2 = false;
      this.list2 = true;
    }
  }
  redo2() {
    if (this.list2 === true) {
      this.name2 = true;
      this.list2 = false;
    }
  }

}
