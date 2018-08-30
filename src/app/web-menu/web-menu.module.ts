import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebMenuComponent } from './web-menu/web-menu.component';
import { SharedModule } from '../shared/shared.module';
import { WebMenuMainMenuComponent } from './web-menu-main-menu/web-menu-main-menu.component';
import { RouterModule } from '@angular/router';
import { WebMenuRoutes } from './web-menu.routing';
import { PressInfoComponent } from '../press/press-info/press-info.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(WebMenuRoutes)
  ],
  declarations: [WebMenuComponent, WebMenuMainMenuComponent],
})
export class WebMenuModule { }
