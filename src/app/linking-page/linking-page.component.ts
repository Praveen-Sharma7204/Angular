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
  opptionIntro = [];


  constructor(private fetch: ServerService) {
    this.a.push(5);
   }

  ngOnInit() {
    this.fetch.getQuiz().subscribe((data) => {
      for(const i of data){
        this.opption.push(i);
      }
      }, (error) => console.log('Error'));

      this.fetch.getIntroTitle().subscribe((data) => {
        for(const i of data){
          this.opptionIntro.push(i.title);
        }
        }, (error) => console.log('Error'));
   }
}
