import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { PageEvent } from '@angular/material';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ServerService } from '../serverService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  pageEvent: PageEvent;
  totalScore;
  score = [];
  displayedColumns = ['fname', 'lname', 'courseName', 'module1', 'module2', 'module3', 'module4', 'module5', 'totalScore'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<Element>(true, []);
  scores;
  constructor(private serverService: ServerService, private router: Router, private changeDetectorRefs: ChangeDetectorRef) {

  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.updateScoresTable();
  }
  updateScoresTable() {
    this.serverService.getScores().subscribe((data) => {
      for (const scores of data) {
        this.scores = {
          fname: scores.fname,
          lname: scores.lname,
          courseName: scores.courseName,
          module1: scores.moduleScore[0],
          module2: scores.moduleScore[1],
          module3: scores.moduleScore[2],
          module4: scores.moduleScore[3],
          module5: scores.moduleScore[4],
          totalScore: scores.totalScore,
        };
        this.score.push(this.scores);
      }
      this.dataSource.data = this.score;
      this.changeDetectorRefs.detectChanges();
    }, (error) => console.log('Error'));
  }



  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
