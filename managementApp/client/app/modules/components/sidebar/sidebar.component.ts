import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[];
  constructor(private router:Router) { }

  ngOnInit() {
    this.items = [
      {label: 'Substation', icon: 'fa fa-sitemap', routerLink: '/app/substation'},
      {label: 'Virtual Substation', icon: 'fa fa-sitemap', routerLink: '/app/virtual-substation'},
      {label: 'Partner', icon: 'fa fa-users', routerLink: '/app/partner'},
      {label: 'Measurements', icon: 'fa fa-list-ul', routerLink: '/app/measurements'},
      {label: 'Device Types', icon: 'fa fa-list-ul', routerLink: '/app/device-types'},
      {label: 'Global settings', icon: 'fa fa-cog', routerLink: '/app/global-settings'}
    ];
  }

}
