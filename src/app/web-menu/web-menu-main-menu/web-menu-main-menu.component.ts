import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-menu-main-menu',
  templateUrl: './web-menu-main-menu.component.html',
  styleUrls: ['./web-menu-main-menu.component.scss']
})
export class WebMenuMainMenuComponent implements OnInit {
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
