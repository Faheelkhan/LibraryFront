import { Component, OnInit } from '@angular/core';
import { TablesService } from '../../pages/tables.service';

@Component({
  selector: 'app-all-press',
  templateUrl: './all-press.component.html',
  styleUrls: ['./all-press.component.scss']
})
export class AllPressComponent implements OnInit {

  rows = [];
  columns = [];
  temp = [];

  constructor(private service: TablesService) { }

  ngOnInit() {
    this.columns = this.service.getDataConf();
    this.rows = this.temp = this.service.getAll();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const columns = Object.keys(this.temp[0]);
    // Removes last "$$index" from "column"
    columns.splice(columns.length - 1);

    // console.log(columns);
    if (!columns.length) {
      return;
    }

    const rows = this.temp.filter(function(d) {
      for (let i = 0; i <= columns.length; i++) {
        const column = columns[i];
        // console.log(d[column]);
        if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
          return true;
        }
      }
    });

    this.rows = rows;

  }


}
