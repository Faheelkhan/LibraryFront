import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public title: String = 'Categories';
  panelOpenState = false;
  numbers: any = [1, 2, 3, 4, 5, 6];
  constructor() { }

  ngOnInit() {
  }

}
