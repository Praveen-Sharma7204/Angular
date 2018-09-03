import { Component, OnInit } from '@angular/core';
import { ServerService } from '../serverService';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {
  data;
  a;
  qid;
  options = [];
  displayedColumns = ['question', 'media', 'option1', 'option2', 'option3', 'option4', 'correctAnswer', 'edit', 'delete'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<Element>(true, []);
  p = 0;
  file;
  image;
  id = '5b8506046a8743d9852a1247';
  formData: FormData;
  flag = 0;
  question;
  ima;
  media;
  option1;
  option2;
  option3;
  intro;
  option4;
  correctAnswer;
  name;
  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
    this.flag = 0;
    this.id = this.serverService.quizid;
    // this.id = '5b8a7c449288db35697aac0c';
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
        console.log(this.data);
        this.name = this.data.name;
        this.intro = this.data.intro;
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
    this.flag = 1;
  }
  callme(data) {
    console.log(data);
    this.qid = data.qid;
    this.question = data.question;
    this.ima = data.media;
    if (data.option1 !== '') {
      this.option1 = data.option1;
    }
    if (data.option2 !== '') {
      this.option2 = data.option2;
    }
    if (data.option3 !== '') {
      this.option3 = data.option3;
    }
    if (data.option4 !== '') {
      this.option4 = data.option4;
    }
    this.correctAnswer = data.correctAnswer;
  }
  onClick(form: NgForm) {
    this.a = form.value;
    // console.log(this.a);
    this.formData = new FormData();
    this.formData.append('question', this.a.question);
    this.options.push(this.a.option1);
    this.options.push(this.a.option2);
    this.options.push(this.a.option3);
    this.options.push(this.a.option4);
    console.log(this.options);
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] !== '' && this.options[i] !== undefined) {
        this.formData.append('options[]', this.options[i]);
      }
    }
    this.formData.append('correctAnswer', this.a.correctAns);
    this.file = document.getElementById('file12');
    this.image = this.file.files;
    if (this.flag === 1) {
      this.formData.append('image', this.image[0]);
    } else {
      this.formData.append('media', this.ima);
    }
    console.log(this.formData);
    this.serverService.mainQuizEdit(this.formData, this.id, this.qid).subscribe((data) => {
    }, (error) => console.log('Error'));
    // this.router.navigate(['/quizpage']);
  }
  onChange(form: NgForm) {
    this.a = form.value;
    this.formData = new FormData();
    this.formData.append('name', this.name);
    this.formData.append('intro', this.intro);
    this.serverService.MainQuizEdit(this.formData, this.id).subscribe((data) => {
    }, (error) => console.log('Error'));
  }


  deleteQuestion() {
    this.serverService.mainQuizDelete(this.id, this.qid).subscribe((data) => {
    }, (error) => console.log('Error'));
  }
  deleteQuiz()  {
    this.serverService.MainQuizDelete(this.id).subscribe((data) => {
    }, (error) => console.log('Error'));
  }

  // saveModuleName(element) {
  //   this.fetch.selectedModule = element.moduleName;
  // }
  // saveChangesDEL() {
  //   this.fetch.delCourse(this.fetch.selectCourse).subscribe((data) => {
  //   }, (error) => console.log('Error'));
  // }
}
