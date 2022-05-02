import {Pipe, PipeTransform} from "@angular/core";
import {IShorCards} from "../../../youtube/main/short-card/short-card.interface";

@Pipe({
  name: 'FilterPipe'
})

export class FilterPipe implements PipeTransform {
  transform(
    value?: IShorCards[],
    sortBy?: string,
    options?: string | boolean,
    searchValue?: string
  ): Array<IShorCards> | undefined {
    switch (sortBy) {
      case "data":
        return value?.sort((cur, next) => {
          const curDateMS = new Date(cur.publishedAt).getTime();
          const nextDateMS = new Date(next.publishedAt).getTime();
          return options ? curDateMS > nextDateMS ? -1 : 1 : curDateMS > nextDateMS ? 1 : -1;
        });
      case "views" :
        return value?.sort((cur, next) => {
          return options ? cur.likeCount > next.likeCount ? -1 : 1 : cur.likeCount > next.likeCount ? 1 : -1;
        });
      case "text" :
        return value?.sort((cur, next) => {
          if(typeof options === 'string') {
            if(next.title.includes(options)) {
              return 1;
            } else {
              return -1
            }
        } else {
            return 0
          }
        })
      default:
        return value
    }
  }
}
