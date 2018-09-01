import { Component, OnInit } from '@angular/core';
import { ServerService } from '../serverService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  course;
  selectedCourse;
  intro;
  data = [];
  introdetails = [];

  constructor(private serverService: ServerService, private router: Router) {
  }

  ngOnInit() {
    this.serverService.getQuizComponent().subscribe((data) => {
      console.log(data);
      this.initializeQuizData(data);
    }, (error) => console.log('Error'));
  }
  initializeQuizData(data) {
    for (const quiz of data) {
      console.log(quiz);
      this.data.push(quiz);
      // this.intro = quiz.introDetails[0];
      // console.log(this.intro);
    }
  }
  selectQuiz(id) {
    this.serverService.quizid = id;
    console.log(this.intro);
    this.router.navigate(['/quizpage']);
  }

}
