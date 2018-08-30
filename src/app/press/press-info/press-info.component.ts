import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press-info',
  templateUrl: './press-info.component.html',
  styleUrls: ['./press-info.component.scss']
})
export class PressInfoComponent implements OnInit {
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
