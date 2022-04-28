import {Pipe, PipeTransform} from "@angular/core";
import {IShorCards} from "../../../youtube/main/short-card/short-card.interface";

@Pipe({
  name: 'FilterPipe'
})

export class FilterPipe implements PipeTransform {
  transform(value?: IShorCards[], sortBy?: 'date' | 'likes' | 'text', isAsc?: boolean): IShorCards[] {
    switch (sortBy) {
      case "date": {
        // @ts-ignore
        return value.sort((cur, next) => {
          const curDateMS = new Date(cur.publishedAt).getTime();
          const nextDateMS = new Date(next.publishedAt).getTime();
          return curDateMS > nextDateMS ? -1 : 1
        });
      }
      default: // @ts-ignore
        return value
    }
  }
}
