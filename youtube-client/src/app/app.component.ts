import { Component, OnInit } from '@angular/core';
import { IShorCards } from './youtube/components/main/short-card/short-card.interface';
import {AppService} from "./app.service";
import ISortingOptions from "./youtube/components/filter-block/filter-block.interface";

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

  constructor(private appService: AppService) {}

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
    this.searchingResults = this.appService.result;
  }
}
