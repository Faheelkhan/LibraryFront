import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TablesService } from './tables.service';
import { AllPagesComponent } from './all-pages/all-pages.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { DraftComponent } from './draft/draft.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxDatatableModule,
    RouterModule.forChild(PagesRoutes)
  ],
  declarations: [PagesComponent, AllPagesComponent, EditPageComponent, DraftComponent],
  providers: [
    TablesService
  ]
})
export class PagesModule { }
