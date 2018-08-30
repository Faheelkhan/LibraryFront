import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { Router } from '@angular/router';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  onLinkClick(event: MatTabChangeEvent) {
    this.router.navigate(['/press/pressCreate']);
  }
}
