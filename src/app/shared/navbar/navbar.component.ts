import { Component, OnInit } from '@angular/core';

export enum MenuType {
  BRAND,
  LEFT,
  RIGHT
}

export interface RouteInfo {
  path: string;
  title: string;
  menuType: MenuType;
}

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Angular 2 Labs', menuType: MenuType.BRAND },
  { path: 'admin', title: 'Admin', menuType: MenuType.LEFT},
  { path: 'forms', title: 'Forms', menuType: MenuType.LEFT},
  { path: 'lazy', title: 'Lazy', menuType: MenuType.LEFT },
  { path: 'dygraph', title: 'Dygraph', menuType: MenuType.LEFT },
  { path: 'masonry', title: 'Masonry', menuType: MenuType.LEFT },
  { path: 'about', title: 'About', menuType: MenuType.RIGHT }
];

@Component({
  selector: 'labs-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: [ 'navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
  public menuItems: any[];
  public brandMenu: any;
  isCollapsed = true;

  constructor() {

  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
  }

  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }

  public getMenuItemClasses(menuItem: any) {
    return {
      'pull-xs-right': menuItem.menuType === MenuType.RIGHT
    };
  }
}
