import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})

export class NotFoundPageComponent {
  notFoundIcon: string;

  constructor() {
    this.notFoundIcon = './assets/404.png';
  }
}
