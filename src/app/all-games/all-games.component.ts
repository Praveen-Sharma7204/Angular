import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {ServerService} from '../serverService';
// import { Router } from '@angular/router';
// import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export class AllGamesComponent implements OnInit {


  displayedColumns = ['name', 'edit'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<Element>(true, []);
  constructor(private serverService: ServerService) {
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.serverService.getAllGames().subscribe((data) => {
      this.updateAllGamesTable(data);
    }, (error) => console.log('Error'));
  }

  updateAllGamesTable(data) {
    this.dataSource.data = data;
    console.log(this.dataSource);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
