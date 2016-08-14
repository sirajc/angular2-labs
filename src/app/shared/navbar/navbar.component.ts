import { Component, OnInit } from '@angular/core';

export enum MenuType {
  BRAND,
  LEFT,
  RIGHT
}

export const ROUTES: any[] = [
  { path: '', pathMatch: 'full', title: 'Angular 2 Labs', menuType: MenuType.BRAND },
  { path: 'admin', title: 'Admin', menuType: MenuType.LEFT},
  { path: 'lazy', title: 'Lazy', menuType: MenuType.LEFT },
  { path: 'dygraph', title: 'Dygraph', menuType: MenuType.LEFT },
  { path: 'about', title: 'About', menuType: MenuType.RIGHT }
];

@Component({
  selector: 'labs-navbar',
  templateUrl: 'navbar.component.html',
  styles: [
    `
    .active {
      color: #fff;
    }
    `
  ]
})
export class NavbarComponent implements OnInit {
  public menuItems: any[];

  constructor() {

  }

  ngOnInit() {
    this.menuItems = ROUTES;
  }

  public getMenuItemClasses(menuItem: any) {
    let menuItemClass = {
      'nav-item': menuItem.menuType === MenuType.LEFT || menuItem.menuType === MenuType.RIGHT,
      'pull-xs-right': menuItem.menuType === MenuType.RIGHT
    };
    return menuItemClass;
  }

  public getMenuItemAnchorClasses(menuItem: any) {
    let menuItemAnchorClass = {
      'navbar-brand': menuItem.menuType === MenuType.BRAND,
      'nav-link': menuItem.menuType === MenuType.LEFT || menuItem.menuType === MenuType.RIGHT
    };
    return menuItemAnchorClass;
  }
}
