import { Component, OnInit } from '@angular/core';
import { IShorCards } from '../cards-box/short-card/short-card.interface';
import { MockService } from '../../../shared/services/mock.service';
import ISortingOptions from '../filter-block/filter-block.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit {
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
