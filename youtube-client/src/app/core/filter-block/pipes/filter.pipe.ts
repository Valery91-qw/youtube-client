import {Pipe, PipeTransform} from "@angular/core";
import {IShorCards} from "../../../youtube/main/short-card/short-card.interface";

@Pipe({
  name: 'FilterPipe'
})

export class FilterPipe implements PipeTransform {
  transform(
    value?: IShorCards[],
    sortBy?: 'date' | 'views' | 'text',
    isAsc?: boolean,
    searchValue?: string
  ): IShorCards[] | undefined {
    switch (sortBy) {
      case "date":
        return value?.sort((cur, next) => {
          const curDateMS = new Date(cur.publishedAt).getTime();
          const nextDateMS = new Date(next.publishedAt).getTime();
          return curDateMS > nextDateMS ? -1 : 1
        });
      case "views" :
        return value?.sort((cur, nex) => {
          return cur.likeCount > nex.likeCount ? -1 : 1
        });
      default:
        return value
    }
  }
}
