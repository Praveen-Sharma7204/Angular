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
  name;
  college;
  city;
  phone;
  userid;
  email;
  user: Element;
  displayedColumns = [ 'name', 'email', 'phone', 'college', 'city', 'edit'];
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
  }
  saveChanges() {
    const userEdited = {
      name: this.name,
      email: this.email,
      college: this.college,
      city: this.city,
      phone: this.phone,
    };
    this.serverService.editedUser = userEdited;
    this.serverService.editUser(this.userid).subscribe((data) => {
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
    this.name = data.name;
    this.email = data.email;
    this.college = data.college;
    this.city = data.city;
    this.phone = data.phone;
    this.userid = data._id;
  }
}
export interface Element {
  _id: string;
  name: string;
  email: string;
  phone: number;
  city: string;
  college: string;
}

 const ELEMENT_DATA: Element[] = [
  {_id: 'qweqweasd23', name: 'Hydrogen', email: '1.0079', phone: 123, city: '1', college: 'adasd'}
];
