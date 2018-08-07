import { Component, OnInit , ViewChild, ChangeDetectorRef} from '@angular/core';
import {PageEvent} from '@angular/material';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {ServerService} from '../serverService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    pageEvent: PageEvent;
    fname;
    lname;
    college;
    city;
    phone;
    userid;
    dob;
    course;
    sem;
    email;
    user: Element;
    displayedColumns = [ 'fname', 'lname', 'dob', 'email', 'phone', 'course', 'sem', 'college', 'city', 'edit'];
    dataSource = new MatTableDataSource();
    selection = new SelectionModel<Element>(true, []);


    constructor(private serverService: ServerService, private router: Router, private changeDetectorRefs: ChangeDetectorRef) {
    }
    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
      this.dataSource.paginator = this.paginator;
      this.updateUserTable();
    }
    updateUserTable() {
      this.serverService.getUsers().subscribe((data) => {
        this.dataSource.data = data;
        this.changeDetectorRefs.detectChanges();
      }, (error) => console.log('Error'));
      console.log(this.dataSource);
    }
    saveChanges() {
      const userEdited = {
        fname: this.fname,
        dob: this.dob,
        lname: this.lname,
        course: this.course,
        sem: this.sem,
        email: this.email,
        college: this.college,
        city: this.city,
        phone: this.phone,
      };
      this.serverService.editedUser = userEdited;
      this.serverService.editUser(this.userid).subscribe((data) => {
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
      this.fname = data.fname;
      this.sem = data.sem;
      this.course = data.course;
      this.dob = data.dob;
      this.lname = data.lname;
      this.email = data.email;
      this.college = data.college;
      this.city = data.city;
      this.phone = data.phone;
      this.userid = data._id;
    }
  }
// export interface Element {
//   _id: string;
//   fname: string;
//   email: string;
//   phone: number;
//   city: string;
//   college: string;
// }

//  const ELEMENT_DATA: Element[] = [
//   {_id: 'qweqweasd23', fname: 'Hydrogen', email: '1.0079', phone: 123, city: '1', college: 'adasd'}
// ];
