import { Routes } from '@angular/router';
import { SitesComponent } from './sites/sites.component';
import { ActiveSitesComponent } from './active-sites/active-sites.component';


export const SitesRoutes: Routes = [
  {
    path: '',
    component: SitesComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: ActiveSitesComponent },
        ]
      }
    ]
  }
];
