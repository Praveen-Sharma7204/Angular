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
  title;
  description;
  details;
  image;
  introid;
  delid;
  
  user: Element;
  displayedColumns = [ 'title', 'image', 'description', 'details', 'edit', 'delete'];
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
    this.serverService.getIntro().subscribe((data) => {
      console.log(data);
      this.dataSource.data = data;
      this.changeDetectorRefs.detectChanges();
    }, (error) => console.log('Error'));
  }
  saveChanges() {
    const introEdited = {
      title: this.title,
      description: this.description,
      details: this.details,
      image: this.image,
      _id: this.introid,
    };
    this.serverService.editedIntro = introEdited;
    this.serverService.editIntro(this.introid).subscribe((data) => {
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
    this.title = data.title;
    this.image = data.image;
    this.description = data.description;
    this.details = data.details;
    this.introid = data._id;
  }

  callmeDEL(data) {
    this.delid= data._id;
  }

  saveChangesDEL() {
    const introEdited = {
      
      _id: this.delid,
    };
    this.serverService.editedQuizDEL = introEdited;
    this.serverService.delIntro(this.delid).subscribe((data) => {
      console.log(data);
    }, (error) => console.log('Error'));
  }
}