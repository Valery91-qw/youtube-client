import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-clock.component.html',
  styleUrls: ['./filter-block.component.scss'],
})

export class FilterBlockComponent {
  isShow: boolean;

  constructor() {
    this.isShow = false;
  }
}
