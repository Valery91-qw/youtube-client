import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-clock.component.html',
  styleUrls: ['./filter-block.component.scss'],
})

export class FilterBlockComponent implements OnInit {
  isShow: boolean | undefined;

  ngOnInit() {
    this.isShow = false;
  }
}
