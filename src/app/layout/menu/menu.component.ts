import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from '../../core/authentication.service';
import { menu } from '@test/menu-data';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = menu;
  itemsWithoutLogin!: MenuItem[];
  user$ = this.authenticationService.user;
  mobile$ = this.layoutService.mobile;

  constructor(
    private authenticationService: AuthenticationService,
    private layoutService: LayoutService
  ) {
  }

  ngOnInit(): void {
    this.initialiseMenu();
  }

  private initialiseMenu(): void {
    this.itemsWithoutLogin = [
      {
        label: 'Startseite',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home/news'
      },
      {
        label: 'Kontakt',
        icon: 'pi pi-fw pi-file-o',
        routerLink: 'kontakt'
      }
    ];
  }

}
