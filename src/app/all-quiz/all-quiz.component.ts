import { Component, OnInit , ViewChild, ChangeDetectorRef} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {ServerService} from '../serverService';
import { Router } from '@angular/router';
import {PageEvent} from '@angular/material';


@Component({
  selector: 'app-all-quiz',
  templateUrl: './all-quiz.component.html',
  styleUrls: ['./all-quiz.component.scss']
})
export class AllQuizComponent implements OnInit {
  pageEvent: PageEvent;
  questions;
  option1;
  option2;
  option3;
  option4;
  correctAns;
  image;
  quizid;
  category = [];
  flag = 0;


  user: Element;
  displayedColumns = [ 'category', 'questions', 'image', 'option1', 'option2', 'option3', 'option4', 'correctAns', 'edit'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<Element>(true, []);
  constructor(private serverService: ServerService, private router: Router, private changeDetectorRefs: ChangeDetectorRef) {

   }
   @ViewChild(MatPaginator) paginator: MatPaginator;

   ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.serverService.getAllQuiz().subscribe((data) => {
      this.updateAllQuizTable(data);
  }, (error) => console.log('Error'));
  }
  updateAllQuizTable(data) {
    // for (const i of data){
    //   if(i.question.mediaURL == "")
    //     data.question.mediaURL = "https://www.freeiconspng.com/uploads/no-image-icon-15.png";
    // }
    this.dataSource.data = data;
    for(const i of data){
      for (const j of this.category)  {
        if (i.category == j)  {
          this.flag = 1;
        }
      }
      if (this.flag == 0){
      this.category.push(i.category);
      }
      this.flag = 0;
    }
    console.log(data);
  }
  saveChanges() {
    const userEdited = {
      questions: this.questions,
      image: this.image,
      option1: this.option1,
      option2: this.option2,
      option3: this.option3,
      option4: this.option4,
      correctAns: this.correctAns,
    };
    this.serverService.editedUser = userEdited;
    this.serverService.editUser(this.quizid).subscribe((data) => {
      console.log(data);
    }, (error) => console.log('Error'));
    // this.router.navigate(['users']);
    // window.location.reload();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  callme(data) {
    console.log(data);
    this.questions = data.questions;
    this.image = data.image;
    this.option1 = data.option1;
    this.option2 = data.option2;
    this.option3 = data.option3;
    this.option4 = data.option4;
    this.correctAns = data.correctAns;
    this.quizid = data._id;
  }
}