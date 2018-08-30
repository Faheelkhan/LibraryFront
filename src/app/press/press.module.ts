import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PressComponent } from './press/press.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PressRoutes } from './press.routing';
import { AllPressComponent } from './all-press/all-press.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TablesService } from '../pages/tables.service';
import { CreatePressComponent } from './create-press/create-press.component';
import { PressInfoComponent } from './press-info/press-info.component';
import { DraftComponent } from './draft/draft.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxDatatableModule,
    RouterModule.forChild(PressRoutes)
  ],
  declarations: [PressComponent, AllPressComponent, CreatePressComponent, PressInfoComponent, DraftComponent],
  providers: [
    TablesService
  ],
  exports: [
    PressInfoComponent
  ]
})
export class PressModule { }
