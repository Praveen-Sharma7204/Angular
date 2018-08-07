import { Component, OnInit , ViewChild, ChangeDetectorRef} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {ServerService} from '../serverService';
import { Router } from '@angular/router';
import {PageEvent} from '@angular/material';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';


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
  user;
  displayedColumns = [ 'title', 'image', 'description', 'details', 'edit', 'delete'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<Element>(true, []);
  data;
  formdata;
  formImage;
  dataFile;
  formData = [];
  selectedFile;
  mediaURL;
  oldMediaURL;

  constructor(private serverService: ServerService, private router: Router, private changeDetectorRefs: ChangeDetectorRef) {

   }
   @ViewChild(MatPaginator) paginator: MatPaginator;

   ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.updateAllIntroTable();
  }
  updateAllIntroTable() {
    this.serverService.getIntro().subscribe((data) => {
      this.dataSource.data = data;
      this.changeDetectorRefs.detectChanges();
    }, (error) => console.log('Error'));
  }
  saveChanges() {
    const introEdited = {
      title: this.title,
      description: this.description,
      details: this.details,
      image: this.selectedFile,
      _id: this.introid,
    };
    this.serverService.editedIntro = introEdited;
    this.serverService.editIntro(this.introid).subscribe((data) => {
    }, (error) => console.log('Error'));
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  callme(data) {
    this.title = data.title;
    this.image = data.image;
    this.description = data.description;
    this.details = data.details;
    this.introid = data._id;
    this.oldMediaURL = data.image;
  }

  callmeDEL(data) {
    this.delid = data._id;
  }

  saveChangesDEL() {
    const introEdited = {
      _id: this.delid,
    };
    this.serverService.editedQuizDEL = introEdited;
    this.serverService.delIntro(this.delid).subscribe((data) => {
    }, (error) => console.log('Error'));
  }

  changeFile(event)  {
    this.selectedFile = null;
    this.selectedFile = event.target.files[0];
  }

}
