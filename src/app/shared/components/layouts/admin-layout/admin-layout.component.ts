import { Component, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import {
  Router,
  NavigationEnd,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
  ResolveStart,
  ResolveEnd
} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MatSidenav } from '@angular/material';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { ThemeService } from '../../../services/theme.service';
import PerfectScrollbar from 'perfect-scrollbar';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {
  public isModuleLoading: Boolean = false;
  private moduleLoaderSub: Subscription;
  private layoutConfSub: Subscription;
  private routerEventSub: Subscription;
  private mediaSub: Subscription;
  private isMobile;
  // private sidebarPS: PerfectScrollbar;
  private bodyPS: PerfectScrollbar;
  private headerFixedBodyPS: PerfectScrollbar;
  public layoutConf: any = {};
  public userData: any = {};

  constructor(
    private router: Router,
    // public translate: TranslateService,
    public themeService: ThemeService,
    private layout: LayoutService,
    private media: ObservableMedia
  ) {
    // Close sidenav after route change in mobile
    // this.routerEventSub = router.events.filter(event => event instanceof NavigationEnd)
    // .subscribe((routeChange: NavigationEnd) => {
    //   if (this.isSm()) {
    //     this.closeSidebar();
    //   }
    // });
    // Translator init
    // const browserLang: string = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
  ngOnInit() {
    this.layoutConf = this.layout.layoutConf;
    this.isMobile = this.isSm();
    this.layout.publishLayoutChange({
      isMobile: this.isMobile,
      sidebarStyle: this.isMobile ? 'closed' : 'full'
    });
    // FOR MODULE LOADER FLAG
    this.moduleLoaderSub = this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
        this.isModuleLoading = true;
      }
      if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        this.isModuleLoading = false;
      }
    });
    // this.userData = JSON.parse(localStorage.getItem('userData'));
    this.userData = {
      firstName : 'Faheel',
      lastName : 'Ahmed Khan'
    };
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = this.isSm();
    this.layout.publishLayoutChange({
      isMobile: this.isMobile,
      sidebarStyle: this.isMobile ? 'closed' : 'full'
    });
  }
  ngAfterViewInit() {
    this.layoutConfSub = this.layout.layoutConf$.subscribe(change => {
      this.initBodyPS(change);
    });
  }
  initBodyPS(layoutConf: any = {}) {
    if (layoutConf.navigationPos === 'side' && layoutConf.topbarFixed) {
      if (this.bodyPS) { this.bodyPS.destroy(); }
      if (this.headerFixedBodyPS) {
        this.headerFixedBodyPS.destroy();
      }
      this.headerFixedBodyPS = new PerfectScrollbar('.rightside-content-hold', {
        suppressScrollX: true
      });
    } else {
      if (this.bodyPS) { this.bodyPS.destroy(); }
      if (this.headerFixedBodyPS) { this.headerFixedBodyPS.destroy(); }
      this.bodyPS = new PerfectScrollbar('.main-content-wrap', {
        suppressScrollX: true
      });
    }
  }
  // ngOnDestroy() {
  //   if (this.moduleLoaderSub) {
  //     this.moduleLoaderSub.unsubscribe();
  //   }
  //   if (this.layoutConfSub) {
  //     this.layoutConfSub.unsubscribe();
  //   }
  //   if (this.routerEventSub) {
  //     this.routerEventSub.unsubscribe();
  //   }
  // }
  closeSidebar() {
    this.layout.publishLayoutChange({
      sidebarStyle: 'closed'
    });
  }
  isSm() {
    return window.matchMedia(`(max-width: 959px)`).matches;
  }
}
