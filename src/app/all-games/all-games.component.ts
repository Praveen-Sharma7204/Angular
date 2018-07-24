import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {ServerService} from '../serverService';
import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
// import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export class AllGamesComponent implements OnInit {
  data;
  formData;
  gameid;
  delid;

  displayedColumns = ['name', 'edit', 'delete'];
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
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  callme(data)  {
    this.gameid = data._id;
  }

  onClick(form: NgForm) {
    this.data = this.data.files;
    this.formData.append('imageURL', this.data[0]);
    this.serverService.editedGame = this.formData;
    this.serverService.editGame(this.gameid).subscribe((data) => {
    }, (error) => console.log('Error'));
  }

  deleteGame(data) {
    this.delid = data._id;
  }

  saveChangesDEL() {
    const quizEdited = {
      _id: this.delid,
    };
    this.serverService.gameDEL(this.delid).subscribe((data) => {
    }, (error) => console.log('Error'));
  }

}
