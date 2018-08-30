import { Routes } from '@angular/router';
import { PressComponent } from './press/press.component';
import { PressInfoComponent } from './press-info/press-info.component';
import { CreatePressComponent } from './create-press/create-press.component';

export const PressRoutes: Routes = [
  {
    path: '',
    component: PressComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'pressInfo', component: PressInfoComponent },
          { path: 'pressCreate', component: CreatePressComponent },
        ]
      }
    ]
  }
];
