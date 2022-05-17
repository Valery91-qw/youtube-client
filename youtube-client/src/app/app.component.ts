import { Component, OnInit } from '@angular/core';
import { IShorCards } from './youtube/components/cards-box/short-card/short-card.interface';
import ISortingOptions from './youtube/components/filter-block/filter-block.interface';
import { MockService } from './shared/services/mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  public isShowFilter: boolean = false;

  public searchingResults: IShorCards[] | undefined;

  public sortingOptions: {
    type: string | undefined,
    options: string | boolean | undefined,
  } | undefined;

  public changeVisibleCb?: () => void;

  public addResultsCb?: () => void;

  constructor(private mockServ: MockService) {}

  ngOnInit() {
    this.changeVisibleCb = this.changeVisible.bind(this);
    this.addResultsCb = this.addResults.bind(this);
  }

  public setSortOptions(options: ISortingOptions) {
    this.sortingOptions = options;
  }

  private changeVisible() {
    this.isShowFilter = !this.isShowFilter;
  }

  private addResults() {
    this.searchingResults = this.mockServ.getResults();
  }
}
