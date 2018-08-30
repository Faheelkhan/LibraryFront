import { Routes } from '@angular/router';
import { WebMenuComponent } from './web-menu/web-menu.component';
import { WebMenuMainMenuComponent } from './web-menu-main-menu/web-menu-main-menu.component';

export const WebMenuRoutes: Routes = [
  {
    path: '',
    component: WebMenuComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: WebMenuMainMenuComponent },
          // { path: 'pressCreate', component: CreatePressComponent },
        ]
      }
    ]
  }
];
