import { Component, OnInit } from '@angular/core';
import { IShorCards } from './short-card/short-card.interface';
import ISortingOptions from '../filter-block/filter-block.interface';
import { MockService } from '../../../shared/services/mock.service';

@Component({
  selector: 'app-cards-box',
  templateUrl: './cards-box.component.html',
  styleUrls: ['./cards-box.component.scss'],
})

export class CardsBoxComponent implements OnInit {
  public isShowFilter: boolean = false;

  public searchingResults: IShorCards[] | undefined;

  public sortingOptions: {
    type: string | undefined,
    options: string | boolean | undefined,
  } | undefined;

  constructor(private mockServ: MockService) {}

  ngOnInit() {
    this.isShowFilter = this.mockServ.showFilter;
    this.searchingResults = this.mockServ.getResults();
  }

  public setSortOptions(options: ISortingOptions) {
    this.sortingOptions = options;
  }
}
