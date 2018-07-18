import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  pageEvent: PageEvent;
  cname;
  positon;
  wight;
  symbole;
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'college', 'city', 'edit'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  callme(data) {
    console.log(data);
    this.cname = data.name;
    this.positon = data.position;
    this.wight = data.weight;
    this.symbole = data.symbol;

  }
}
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  id: number;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'HydrogenLorem Ipsum is simply dummy text of the printing and typesetting industry.', weight: 1.0079, symbol: 'H', id: 1},
  {position: 2, name: 'Helium Lorem Ipsum is simply dummy text of the printing and typesetting industry.', weight: 4.0026, symbol: 'He', id: 2},
  {position: 3, name: 'Lithium Lorem Ipsum is simply dummy text of the printing and typesetting industry.', weight: 6.941, symbol: 'Li', id: 3},
  {position: 4, name: 'Beryllium Lorem Ipsum is simply dummy text of the printing and typesetting industry.', weight: 9.0122, symbol: 'Be', id: 4},
  {position: 5, name: 'Boron Lorem Ipsum is simply dummy text of the printing and typesetting industry.', weight: 10.811, symbol: 'B' , id: 5},
  {position: 6, name: 'Carbon Lorem Ipsum is simply dummy text of the printing and typesetting industry.', weight: 12.0107, symbol: 'C', id: 6},
];
