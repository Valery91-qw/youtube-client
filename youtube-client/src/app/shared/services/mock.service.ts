import { Injectable } from '@angular/core';
import { IShorCards } from '../../youtube/components/cards-box/short-card/short-card.interface';

@Injectable({
  providedIn: 'root',
})

export class MockService {
  public showFilter = true;

  private result: IShorCards[] = [
    {
      viewCount: 1020,
      likeCount: 2,
      dislikeCount: 43,
      commentCount: 122,
      title: 'Text',
      imageUrl: 'https://i.ytimg.com/vi/G0bBLvWXBvc/hqdefault.jpg',
      publishedAt: '2019-05-30T12:42:19.000Z',
    },
    {
      viewCount: 32,
      likeCount: 3,
      dislikeCount: 32,
      commentCount: 332,
      title: 'Score',
      imageUrl: 'https://i.ytimg.com/vi/G0bBLvWXBvc/hqdefault.jpg',
      publishedAt: '2022-12-29T17:46:58.000Z',
    },
    {
      viewCount: 14340,
      likeCount: 4,
      dislikeCount: 89,
      commentCount: 34,
      title: 'Qui',
      imageUrl: 'https://i.ytimg.com/vi/Rf54BH35yrY/sddefault.jpg',
      publishedAt: '2022-12-01T16:48:15.000Z',
    },
    {
      viewCount: 210,
      likeCount: 5,
      dislikeCount: 2334,
      commentCount: 35,
      title: 'xixi',
      imageUrl: 'https://i.ytimg.com/vi/G0bBLvWXBvc/hqdefault.jpg',
      publishedAt: '2019-09-04T15:00:12.000Z',
    },
  ];

  public getResults() {
    return this.result;
  }

  public getCardByTitle(title: string): IShorCards {
    return this.result.find((el) => el.title === title) as IShorCards;
  }
}
