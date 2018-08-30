import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CategoryRoutes } from './categories.routing';
import { CategoryComponent } from './category/category.component';
import { CategoriesComponent } from './categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(CategoryRoutes)
  ],
  declarations: [CategoryComponent, CategoriesComponent, EditCategoryComponent]
})
export class CategoriesModule { }
