import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import headerConstant from './header.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  isSettingsVisible: boolean = false;

  disable: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        event.url === headerConstant.defaultPath ? this.disable = false : this.disable = true;
      }
    });
  }
}
