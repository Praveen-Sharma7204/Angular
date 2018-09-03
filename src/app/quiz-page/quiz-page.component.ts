import { Component, OnInit } from '@angular/core';
import { ServerService } from '../serverService';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {
  data;
  options = [];
  displayedColumns = ['question', 'media', 'option1', 'option2', 'option3', 'option4', 'correctAnswer', 'edit', 'delete'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<Element>(true, []);
  p = 0;
  id = '5b8506046a8743d9852a1247';
  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
    this.id = this.serverService.quizid;
    this.id = '5b8a7c449288db35697aac0c';
    console.log(this.serverService.quizid);
    this.serverService.getQuizComponent().subscribe((data) => {
      console.log(data);
      this.initializeQuizData(data);
    }, (error) => console.log('Error'));
  }
  initializeQuizData(data) {
    for (const quiz of data) {
      // if (this.serverService.quizid === quiz._id) {
      if (this.id === quiz._id) {
        this.data = quiz;
        this.dataSource = this.data.quizObject;
        this.p = 0;
        for (const i of quiz.quizObject) {
          this.dataSource[this.p].option1 = i.options[0];
          this.dataSource[this.p].option2 = i.options[1];
          this.dataSource[this.p].option4 = i.options[3];
          this.dataSource[this.p].option3 = i.options[2];
          this.p += 1;
        }
      }
    }
    console.log(data);
    console.log(this.dataSource);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.data.filter = filterValue;
  }

  click() {
    console.log('aksdkjhaskd');
  }
  callme( data )  {
    console.log(data);
  }

  // saveModuleName(element) {
  //   this.fetch.selectedModule = element.moduleName;
  // }
  // saveChangesDEL() {
  //   this.fetch.delCourse(this.fetch.selectCourse).subscribe((data) => {
  //   }, (error) => console.log('Error'));
  // }
}
