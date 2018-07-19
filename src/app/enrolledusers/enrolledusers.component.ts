import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent} from '@angular/material';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ServerService } from '../serverService';

@Component({
  selector: 'app-enrolledusers',
  templateUrl: './enrolledusers.component.html',
  styleUrls: ['./enrolledusers.component.scss']
})
export class EnrolledusersComponent implements OnInit {pageEvent: PageEvent;
  displayedColumns = ['fname', 'lname', 'college', 'courses'];
  dataSource = new MatTableDataSource();
  enrolledUser = {
    fname: '',
    lname: '',
    college: '',
    courses: ''
  };
  users = [];
  constructor(private serverService: ServerService) {
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.serverService.getUsers().subscribe((data) => this.initializeUserData(data), (error) => console.log('Error'));
    this.dataSource.paginator = this.paginator;
  }
  initializeUserData(data) {
    for (const user of data) {
      this.enrolledUser = {
        fname: '',
        lname: '',
        college: '',
        courses: ''
      };
      if (user.enrolments.length > 0) {
        this.enrolledUser.fname = user.fname;
        this.enrolledUser.lname = user.lname;
        this.enrolledUser.college = user.college;
        for (const course of user.enrolments) {
          this.enrolledUser.courses += course + ';';
        }
        console.log(this.enrolledUser);
        this.users.push(this.enrolledUser);
      }
    }
    this.dataSource.data = this.users;
 }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

