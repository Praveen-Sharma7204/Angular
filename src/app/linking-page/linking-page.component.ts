import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linking-page',
  templateUrl: './linking-page.component.html',
  styleUrls: ['./linking-page.component.scss']
})
export class LinkingPageComponent implements OnInit {
  a = [];

  constructor() {
    this.a.push(1,2,4,4,4,6,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,44,4,4,4,44,4,4,4,4,4,4,4,65,4,4,69,44,3,4);
   }

  ngOnInit() {
  }

}
