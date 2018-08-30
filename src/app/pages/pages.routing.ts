import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';


export const PagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: PagesComponent,
        // data: { title: 'Category', breadcrumb: 'CategoryCrud' }
      // }, {
      //   path: 'editCatrgory',
      //   component: EditCategoryComponent,
      //   // data: { title: 'Category', breadcrumb: 'CategoryCrud' }
      // }
      }
    ]
  }
];
