import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-clock.component.html',
  styleUrls: ['./filter-block.component.scss'],
})

export class FilterBlockComponent implements OnInit {
  @Output() sendSortOptions = new EventEmitter;

  isShow: boolean | undefined;
  sorting: {
    type: string | undefined;
    options: string | undefined;
  } | undefined

  ngOnInit() {
    this.isShow = false;
    this.sorting = {
      type: undefined,
      options: undefined,
    };
  }

  setSortType(event: Event) {
    const target = event.target as HTMLButtonElement;
    this.sorting!.type = target.value;
    this.sendSortOptions.emit(this.sorting?.type);
  }
}
