import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

interface ILayoutConf {
  navigationPos?: string;   // side, top
  sidebarStyle?: string;    // full, compact, closed
  dir?: string;             // ltr, rtl
  layoutInTransition?: boolean;
  isMobile?: boolean;
  useBreadcrumb?: boolean;
  breadcrumb?: string;      // simple, title
  topbarFixed?: boolean;
}
interface ILayoutChangeOptions {
  duration?: number;
  transitionClass?: boolean;
}

@Injectable()
export class LayoutService {
  public layoutConf: ILayoutConf;
  layoutConfSubject = new BehaviorSubject<ILayoutConf>(this.layoutConf);
  layoutConf$ = this.layoutConfSubject.asObservable();

  constructor(
    private router: Router
  ) {
    this.setAppLayout();
  }

  setAppLayout() {
    // ******** SET YOUR LAYOUT OPTIONS HERE *********
    this.layoutConf = {
      'navigationPos': 'side',
      'sidebarStyle': 'full',
      'dir': 'ltr',
      'useBreadcrumb': true,
      'topbarFixed': false,
      'breadcrumb': 'title'
    };
  }

  publishLayoutChange(lc: ILayoutConf, opt: ILayoutChangeOptions = {}) {
    const duration = opt.duration || 250;
    if (!opt.transitionClass) {
      this.layoutConf = Object.assign(this.layoutConf, lc);
      return this.layoutConfSubject.next(this.layoutConf);
    }

    this.layoutConf = Object.assign(this.layoutConf, lc, { layoutInTransition: true });
    this.layoutConfSubject.next(this.layoutConf);

    setTimeout(() => {
      this.layoutConf = Object.assign(this.layoutConf, { layoutInTransition: false });
      this.layoutConfSubject.next(this.layoutConf);
    }, duration);
  }
}
