import { Component } from '@angular/core';
import {IShorCards} from "./main/short-card/short-card.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  isShowFilter: boolean;
  searchingResults: IShorCards[] | undefined;
  changeVisibleCb: () => void;
  addResultsCb: () => void;

  constructor() {
    this.isShowFilter = false;
    this.changeVisibleCb = this.changeVisible.bind(this);
    this.addResultsCb = this.addResults.bind(this);
  }

  changeVisible() {
    this.isShowFilter = !this.isShowFilter;
  }

  addResults() {
    this.searchingResults = [
      {
        viewCount: 1020, likeCount: 2, dislikeCount: 43, commentCount: 122, title: 'dsdsdasd', imageUrl: 'https://i.ytimg.com/vi/G0bBLvWXBvc/hqdefault.jpg',
      },
      {
        viewCount: 32, likeCount: 3, dislikeCount: 32, commentCount: 332, title: 'sdasdadasd', imageUrl: 'https://i.ytimg.com/vi/G0bBLvWXBvc/hqdefault.jpg',
      },
      {
        viewCount: 14340, likeCount: 4, dislikeCount: 89, commentCount: 34, title: 'dsd3dasdsasdasd', imageUrl: 'https://i.ytimg.com/vi/Rf54BH35yrY/sddefault.jpg',
      },
      {
        viewCount: 210, likeCount: 5, dislikeCount: 2334, commentCount: 35, title: 'dsdsada2dsdasd', imageUrl: 'https://i.ytimg.com/vi/G0bBLvWXBvc/hqdefault.jpg',
      },
    ];
  }
}
