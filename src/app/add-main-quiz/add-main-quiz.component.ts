import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../serverService';

@Component({
  selector: 'app-add-main-quiz',
  templateUrl: './add-main-quiz.component.html',
  styleUrls: ['./add-main-quiz.component.scss']
})
export class AddMainQuizComponent implements OnInit {
  a;
  formData: FormData;
  file: any;
  image: any;
  options = [];
  id: any;

  constructor(private serverservice: ServerService) { }

  ngOnInit() {
    this.id = this.serverservice.quizid;
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
    for (let i = 0; i < this.options.length; i++) {
      this.formData.append('options[]', this.options[i]);
    }
    this.formData.append('correctAnswer', this.a.correctAns);
    this.file = document.getElementById('file12');
    this.image = this.file.files;
    this.formData.append('media', this.image[0]);
    this.serverservice.mainQuizCreate(this.formData, this.id).subscribe((data) => {
    }, (error) => console.log('Error'));
  }
}
