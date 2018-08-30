import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

interface IMenuItem {
  type: string;       // Possible values: link/dropDown/icon/separator/extLink
  name?: string;      // Used as display text for item and title for separator type
  state?: string;     // Router state
  icon?: string;      // Material icon name
  tooltip?: string;   // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string;       // Display text
  state?: string;     // Router state
  icon?: string;
  sub?: IChildItem[];
}

interface IBadge {
  color: string;      // primary/accent/warn/hex color codes(#fff000)
  value: string;      // Display text
}

@Injectable()
export class NavigationService {
  constructor() { }

  // tslint:disable-next-line:member-ordering
  defaultMenu: IMenuItem[] = [
    {
      name: 'DASHBOARD',
      type: 'link',
      tooltip: 'Dashboard',
      icon: 'dashboard',
      state: 'dashboard'
    },
    // {
    //   name: 'Content',
    //   type: 'dropDown',
    //   tooltip: 'Content',
    //   icon: 'person',
    //   state: 'content',
    //   sub: [
    //     { name: 'Videos', state: 'videos' , icon: 'person', type: 'link'},
    //     { name: 'Images', state: 'images' },
    //   ]
    // },
    // {
    //   name: 'USERS',
    //   type: 'dropDown',
    //   tooltip: 'Users',
    //   icon: 'person',
    //   state: 'users',
    //   sub: [
    //     { name: 'User List', state: 'userTable' },
    //     { name: 'User Profile', state: 'userProfile' },
    //   ]
    // },
    {
      name: 'Category',
      type: 'link',
      tooltip: 'Category',
      icon: 'layers',
      state: 'categories'
    },
    {
      name: 'Pages',
      type: 'link',
      tooltip: 'Pages',
      icon: 'description',
      state: 'pages'
    }, {
      name: 'Press',
      type: 'link',
      tooltip: 'Press',
      icon: 'ballot',
      state: 'press'
    },
    {
      name: 'Web Menu',
      type: 'link',
      tooltip: 'Web Menu',
      icon: 'web',
      state: 'webMenu'
    },
    {
      name: 'Sites',
      type: 'link',
      tooltip: 'Sites',
      icon: 'all_inbox',
      state: 'sites'
    }
  ];

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle: String = 'Frequently Accessed';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    this.menuItems.next(this.defaultMenu);
  }
}
