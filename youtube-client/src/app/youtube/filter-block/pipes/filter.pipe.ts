import { Pipe, PipeTransform } from '@angular/core';
import { IShorCards } from '../../main/short-card/short-card.interface';

@Pipe({
  name: 'FilterPipe',
})

export class FilterPipe implements PipeTransform {
  transform(
    value?: IShorCards[],
    sortBy?: string,
    options?: string | boolean,
  ): Array<IShorCards> | undefined {
    switch (sortBy) {
      case 'data':
        return value?.sort(
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
        return value?.sort(
          (cur, next) => {
            if (options) {
              return cur.likeCount > next.likeCount ? -1 : 1;
            }
            return cur.likeCount > next.likeCount ? 1 : -1;
          },
        );
      case 'text':
        if (typeof options === 'string') {
          return value?.filter(
            (card) => card.title.toLowerCase().includes(options.toLowerCase()),
          );
        }
        return value;
      default:
        return value;
    }
  }
}
