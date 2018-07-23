import { Component, OnInit } from '@angular/core';
import {ServerService} from '../serverService';
import {SelectionModel} from '@angular/cdk/collections';

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
  mediaURL;
  mediaType;
  constructor(private fetch: ServerService) {
   }
   hideCategory() {
     if (this.category === 'Create New') {
       this.hide = false;
     }
    //  if(this.category != 'Create New' && this.category != 'Select category')
    //  else{
    //    name: this.selectedOption;
    //  }
   }
  ngOnInit() {
  this.fetch.getQuiz().subscribe((data) => {
    for (const i of data) {
      this.opption.push(i);
    }
    }, (error) => console.log('Error'));
 }

}
