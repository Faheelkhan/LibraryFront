import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { TranslateModule } from 'ng2-translate/ng2-translate';
import {
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  // MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatDialogModule,
  MatExpansionModule,
  MatSlideToggleModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
// ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT
import { HeaderSideComponent } from './components/header-side/header-side.component';
import { SidebarSideComponent } from './components/sidebar-side/sidebar-side.component';
import {MatTabsModule} from '@angular/material/tabs';
// ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT
// import { HeaderTopComponent } from './components/header-top/header-top.component';
// import { SidebarTopComponent } from './components/sidebar-top/sidebar-top.component';

// ONLY FOR DEMO (Removable without changing any layout configuration)
// import { CustomizerComponent } from './components/customizer/customizer.component';

// ALL TIME REQUIRED
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
// import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
// import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

// DIRECTIVES
// import { FontSizeDirective } from './directives/font-size.directive';
// import { ScrollToDirective } from './directives/scroll-to.directive';
// import { AppDropdownDirective } from './directives/dropdown.directive';
// import { DropdownAnchorDirective } from './directives/dropdown-anchor.directive';
// import { DropdownLinkDirective } from './directives/dropdown-link.directive';

// PIPES
// import { RelativeTimePipe } from './pipes/relative-time.pipe';
// import { ExcerptPipe } from './pipes/excerpt.pipe';

// SERVICES
import { ThemeService } from './services/theme.service';
import { LayoutService } from './services/layout.service';
import { NavigationService } from './services/navigation.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
// import { RoutePartsService } from './services/route-parts.service';
// import { AuthGuard } from './services/auth/auth.guard';

const classesToInclude = [

  // HeaderTopComponent,
  // SidebarTopComponent,
  SidenavComponent,
  NotificationsComponent,
  SidebarSideComponent,
  HeaderSideComponent,
  AdminLayoutComponent,
  // AuthLayoutComponent,
  // BreadcrumbComponent,
  // CustomizerComponent,
  // FontSizeDirective,
  // ScrollToDirective,
  // AppDropdownDirective,
  // DropdownAnchorDirective,
  // DropdownLinkDirective,
  // RelativeTimePipe,
  // ExcerptPipe
];
import 'hammerjs';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatDialogModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule,
    MatChipsModule,
    MatSlideToggleModule
  ],
  providers: [
    ThemeService,
    LayoutService,
    NavigationService,
    // RoutePartsService,
    // AuthGuard
  ],
  declarations: classesToInclude,
  exports: [
    classesToInclude,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatInputModule,
    MatChipsModule,
    MatSlideToggleModule
  ]
})
export class SharedModule { }
