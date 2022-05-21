import {
  Component, HostBinding, Input, OnInit,
} from '@angular/core';
import { IShorCards } from './short-card.interface';
import shortCardConstants from './short-card.constants';

@Component({
  selector: 'app-short-card',
  templateUrl: './short-card.component.html',
  styleUrls: ['./short-card.component.scss'],
})

export class ShortCardComponent implements OnInit {
  @Input() shortCard: IShorCards | undefined;

  private colorClass: string | undefined;

  @HostBinding() class: string | undefined;

  private static getNumbersOfDay(publishDate?: string): number {
    const publishDay = Number(new Date(publishDate || new Date()));
    const dayNow = Number(new Date());
    const daysAgo = dayNow - publishDay;
    const oneDayMS = (
      shortCardConstants.MS_IN_SECOND * shortCardConstants.SECONDS_IN_MIN
      * shortCardConstants.MIN_IN_HOUR * shortCardConstants.HOURS_IN_DAY
    );
    return Math.round(daysAgo / oneDayMS);
  }

  private static setColorClass(daysAgo: number): string {
    if (daysAgo > 182) return shortCardConstants.CLASS_RED;
    if (daysAgo < 30 && daysAgo ! > 7) return shortCardConstants.CLASS_BLUE;
    return shortCardConstants.CLASS_GREEN;
  }

  ngOnInit() {
    const daysAgo = ShortCardComponent.getNumbersOfDay(this.shortCard?.publishedAt);
    this.colorClass = ShortCardComponent.setColorClass(daysAgo);
    this.class = this.colorClass;
  }
}
