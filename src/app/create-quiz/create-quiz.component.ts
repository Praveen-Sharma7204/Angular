import { Component, OnInit } from '@angular/core';
import {ServerService} from '../serverService';
import {SelectionModel} from '@angular/cdk/collections';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  opption = [];
  def;
  hide = true;
  flag = 0;
  question;
  option1;
  option2;
  option3;
  option4;
  category;
  questionId;
  noImage;
  mediaURL;
  mediaType;
  formData;
  file;
  image;
  a;
  click = false;
  constructor(private http: HttpClient, private fetch: ServerService) {
   }
   hideCategory() {
     if (this.category === 'Create New') {
       this.hide = false;
     }
   }

   clearText()  {
    this.category = '';
   }

  ngOnInit() {
  this.fetch.getQuiz().subscribe((data) => {
    for (const i of data) {
      this.opption.push(i);
      }
    }, (error) => console.log('Error'));
 }

 onClick(form: NgForm) {
    this.a = form.value;
    // console.log(this.a);
    this.formData = new FormData();
    this.formData.append('category', this.a.category);
    this.formData.append('question', this.a.question);
    this.formData.append('option1', this.a.option1);
    this.formData.append('option2', this.a.option2);
    this.formData.append('option3', this.a.option3);
    this.formData.append('option4', this.a.option4);
    this.formData.append('correctAns', this.a.correctAns);
    this.file = document.getElementById('file12');
    this.image = this.file.files;
    this.formData.append('mediaType', this.mediaType);
    this.formData.append('mediaURL', this.image[0]);
    if (this.click === false)  {
      // this.formData.append('mediaType', 'null');
      // this.formData.append('mediaURL', 'null');
    }
    console.log(this.image[0]);
    this.fetch.quizCreate(this.formData).subscribe((data) => {
    }, (error) => console.log('Error'));
  }
  checkFile () {
    this.click = true;
    this.mediaType = 'image';
  }
}
