import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  isShowFilter: boolean;
  changeVisibleCb: () => void;

  constructor() {
    this.isShowFilter = false;
    this.changeVisibleCb = this.changeVisible.bind(this)
  }

  changeVisible() {
    this.isShowFilter = !this.isShowFilter;
  }
}
