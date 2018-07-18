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
  constructor(private fetch: ServerService) {
    
   }
   
  ngOnInit() {
  this.fetch.getQuiz().subscribe((data) =>this.opption.push(data), (error) => console.log('Error'));

 }
  new() {
    this.hide=false;
  }
}
