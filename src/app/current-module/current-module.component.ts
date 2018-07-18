import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-module',
  templateUrl: './current-module.component.html',
  styleUrls: ['./current-module.component.scss']
})
export class CurrentModuleComponent implements OnInit {
  name = true;
  list = false;
  name1 = true;
  list1 = false;
  name2 = true;
  list2 = false;

  constructor() { }

  ngOnInit() {
  }
  edit() {
    if (this.name === true) {
      this.name = false;
      this.list = true;
    }
  }
  redo() {
    if (this.list === true) {
      this.name = true;
      this.list = false;
    }
  }
  edit1() {
    if (this.name1 === true) {
      this.name1 = false;
      this.list1 = true;
    }
  }
  redo1() {
    console.log('clicked');
    if (this.list1 === true) {
      this.name1 = true;
      this.list1 = false;
    }
  }
  edit2() {
    if (this.name2 === true) {
      this.name2 = false;
      this.list2 = true;
    }
  }
  redo2() {
    if (this.list2 === true) {
      this.name2 = true;
      this.list2 = false;
    }
  }

}
