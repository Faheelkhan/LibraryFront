import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public title: String = 'Dashboard';
  public para: String = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
   Dolore repudiandae accusantium error, non assumenda corporis enim atque id iusto.
  Necessitatibus similique soluta praesentium dolorum debitis temporibus cupiditate consectetur tenetur facilis.`;
  constructor() { }

  ngOnInit() {
  }

}
