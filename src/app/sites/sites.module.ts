import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesComponent } from './sites/sites.component';
import { ActiveSitesComponent } from './active-sites/active-sites.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SitesRoutes } from './sites.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(SitesRoutes)
  ],
  declarations: [SitesComponent, ActiveSitesComponent]
})
export class SitesModule { }
