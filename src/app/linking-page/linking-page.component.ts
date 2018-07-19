import {ServerService} from '../serverService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linking-page',
  templateUrl: './linking-page.component.html',
  styleUrls: ['./linking-page.component.scss']
})
export class LinkingPageComponent implements OnInit {
  a = [];
  opption = [];


  constructor(private fetch: ServerService) {
    this.a.push(5);
   }

  ngOnInit() {
    this.fetch.getQuiz().subscribe((data) => {
      for(const i of data){
        this.opption.push(i);
      }
      }, (error) => console.log('Error'));
   }
}
