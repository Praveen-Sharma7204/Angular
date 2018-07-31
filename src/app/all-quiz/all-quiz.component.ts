import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ServerService } from '../serverService';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-all-quiz',
  templateUrl: './all-quiz.component.html',
  styleUrls: ['./all-quiz.component.scss']
})
export class AllQuizComponent implements OnInit {
  pageEvent: PageEvent;
  question;
  option1;
  option2;
  option3;
  option4;
  correctAns;
  imageURL;
  quizid;
  mediaType;
  category = [];
  flag = 0;
  cat;
  delid;


  user: Element;
  displayedColumns = ['category', 'questions', 'image', 'option1', 'option2', 'option3', 'option4', 'correctAns', 'edit', 'delete'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<Element>(true, []);
  constructor(private serverService: ServerService, private readonly notifier: NotifierService,
       private router: Router, private changeDetectorRefs: ChangeDetectorRef) {
        this.notifier.show( {
          type: 'success',
          message: 'You are awesome! I mean it!',
          id: 'THAT_NOTIFICATION_ID' // Again, this is optional
        } );
        }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.serverService.getAllQuiz().subscribe((data) => {
      this.updateAllQuizTable(data);
    }, (error) => console.log('Error'));
  }
  updateAllQuizTable(data) {
    this.dataSource.data = data;
    for (const i of data) {
      for (const j of this.category) {
        if (i.category === j) {
          this.flag = 1;
        }
      }
      if (this.flag === 0) {
        this.category.push(i.category);
      }
      this.flag = 0;
    }
  }
  saveChanges() {
    const quizEdited = {
      question: this.question,
      imageURL: this.imageURL,
      option1: this.option1,
      option2: this.option2,
      option3: this.option3,
      option4: this.option4,
      correctAns: this.correctAns,
      mediaType: this.mediaType,
      category: this.cat,
    };
    this.serverService.editedQuiz = quizEdited;
    this.serverService.editQuiz(this.quizid).subscribe((data) => {
    }, (error) => console.log('Error'));
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  callme(data) {
    this.question = data.question.qstn;
    this.imageURL = data.imageURL;
    this.mediaType = data.mediaType;
    this.option1 = data.options[0];
    this.option2 = data.options[1];
    this.option3 = data.options[2];
    this.option4 = data.options[3];
    this.correctAns = data.correctAns;
    this.quizid = data._id;
    this.cat = data.category;
  }

  callmeDEL(data) {
    this.delid = data._id;
  }

  saveChangesDEL() {
    const quizEdited = {
      _id: this.delid,
    };
    this.serverService.editedQuizDEL = quizEdited;
    this.serverService.editQuizDEL(this.delid).subscribe((data) => {
    }, (error) => console.log('Error'));
  }
}
