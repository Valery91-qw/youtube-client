/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';
import { IShorCards } from '../../youtube/components/cards-box/short-card/short-card.interface';

@Pipe({
  name: 'FilterPipe',
})

export class FilterPipe implements PipeTransform {
  public transform(
    shortCards?: IShorCards[],
    sortBy?: string,
    options?: string | boolean,
  ): Array<IShorCards> | undefined {
    switch (sortBy) {
      case 'data':
        return shortCards?.sort(
          (cur, next) => {
            const curDateMS = new Date(cur.publishedAt).getTime();
            const nextDateMS = new Date(next.publishedAt).getTime();
            if (options) {
              return curDateMS > nextDateMS ? -1 : 1;
            }
            return curDateMS > nextDateMS ? 1 : -1;
          },
        );
      case 'views':
        return shortCards?.sort(
          (cur, next) => {
            if (options) {
              return cur.likeCount > next.likeCount ? -1 : 1;
            }
            return cur.likeCount > next.likeCount ? 1 : -1;
          },
        );
      case 'text':
        if (typeof options === 'string') {
          return shortCards?.filter(
            (card) => card.title.toLowerCase().includes(options.toLowerCase()),
          );
        }
        return shortCards;
      default:
        return shortCards;
    }
  }
}
