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
  courseid;
  titleName;
  cat;
  moduleName;
  gameTitle;
  opptionGame = [];

  constructor(private fetch: ServerService) {
    this.a.push(5);
   }

  ngOnInit() {
    this.fetch.getQuiz().subscribe((data) => {
      for (const i of data) {
        this.opption.push(i);
      }
      }, (error) => console.log('Error'));

      this.fetch.getIntroTitle().subscribe((data) => {
        for (const i of data) {
          this.opptionIntro.push(i.title);
        }
        }, (error) => console.log('Error'));

        this.fetch.getAllGames().subscribe((data) => {
          for (const i of data) {
            this.opptionGame.push(i.name);
          }
          }, (error) => console.log('Error'));

        this.fetch.getCourses().subscribe((data) => {
          // this.courseid = this.fetch.selectCourse;
          for (const i of data) {
            if (this.fetch.selectCourse === i._id ) {
                this.courseid = i._id;
            }
          }
          }, (error) => console.log('Error'));
   }

   saveChanges() {
    const moduleEdited = {
      titleName: this.titleName,
      gameTitle: this.gameTitle,
      moduleName: this.moduleName,
      category: this.cat,
    };
    this.fetch.editedModule = moduleEdited;
    this.fetch.editCourseModule(this.courseid).subscribe((data) => {
    }, (error) => console.log('Error'));
}
}
