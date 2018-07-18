import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export class AllGamesComponent implements OnInit {
  dataSource;
  displayedColumns;
  applyFilter;
  constructor() { }

  ngOnInit() {
  }

}
