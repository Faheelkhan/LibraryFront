import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CategoryComponent } from './category/category.component';

export const CategoryRoutes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      {
        path: '',
        component: CategoryComponent,
        // data: { title: 'Category', breadcrumb: 'CategoryCrud' }
      }, {
        path: 'editCatrgory',
        component: EditCategoryComponent,
        // data: { title: 'Category', breadcrumb: 'CategoryCrud' }
      }
    ]
  }
];
