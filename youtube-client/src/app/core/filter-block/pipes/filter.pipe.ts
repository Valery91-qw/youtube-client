import {Pipe, PipeTransform} from "@angular/core";
import {IShorCards} from "../../../youtube/main/short-card/short-card.interface";

@Pipe({
  name: 'FilterPipe'
})

export class FilterPipe implements PipeTransform {
  transform(
    value?: IShorCards[],
    sortBy?: string,
    isAsc?: boolean,
    searchValue?: string
  ): IShorCards[] | undefined {
    switch (sortBy) {
      case "data":
        return value?.sort((cur, next) => {
          const curDateMS = new Date(cur.publishedAt).getTime();
          const nextDateMS = new Date(next.publishedAt).getTime();
          return isAsc ? curDateMS > nextDateMS ? -1 : 1 : curDateMS > nextDateMS ? 1 : -1;
        });
      case "views" :
        return value?.sort((cur, nex) => {
          return isAsc ? cur.likeCount > nex.likeCount ? -1 : 1 : cur.likeCount > nex.likeCount ? 1 : -1;
        });
      default:
        return value
    }
  }
}
