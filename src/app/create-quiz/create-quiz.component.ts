import { Component, OnInit } from '@angular/core';
import {ServerService} from '../serverService';

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
  questionId;
  constructor(private fetch: ServerService) {
    
   }
   hideCategory() {
     this.hide = false;
   }
  ngOnInit() {
  this.fetch.getQuiz().subscribe((data) => {
    for(const i of data){
      this.opption.push(i);
    }
    }, (error) => console.log('Error'));
 }
 callme(data) {
  console.log(data);
  this.question = data.question;
  this.option1 = data.option1;
  this.option2 = data.option2;
  this.option3 = data.option3;
  this.option4 = data.option4;
  this.questionId = data._id;
}

}
