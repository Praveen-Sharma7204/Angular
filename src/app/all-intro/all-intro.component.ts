import { Component, OnInit , ViewChild, ChangeDetectorRef} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {ServerService} from '../serverService';
import { Router } from '@angular/router';
import {PageEvent} from '@angular/material';


@Component({
  selector: 'app-all-intro',
  templateUrl: './all-intro.component.html',
  styleUrls: ['./all-intro.component.scss']
})
export class AllIntroComponent implements OnInit {
  pageEvent: PageEvent;
  questions;
  option1;
  option2;
  option3;
  option4;
  correctAns;
  image;
  introid;
  
  user: Element;
  displayedColumns = [ 'questions', 'image', 'option1', 'option2', 'option3', 'option4', 'correctAns', 'edit'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<Element>(true, []);
  constructor(private serverService: ServerService, private router: Router, private changeDetectorRefs: ChangeDetectorRef) {

   }
   @ViewChild(MatPaginator) paginator: MatPaginator;

   ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.updateAllIntroTable();
  }
  updateAllIntroTable() {
    this.serverService.getUsers().subscribe((data) => {
      this.dataSource.data = data;
      this.changeDetectorRefs.detectChanges();
    }, (error) => console.log('Error'));
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
    this.serverService.editUser(this.introid).subscribe((data) => {
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
    this.introid = data._id;
  }
}