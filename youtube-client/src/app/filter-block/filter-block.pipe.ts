import {Pipe, PipeTransform} from "@angular/core";
import {IShorCards} from "../main/short-card/short-card.interface";

@Pipe({
  name: 'filters',
})

export class FilterBlockPipe implements PipeTransform {

  transform(value: IShorCards[], filter: string | undefined) {

  }
}
