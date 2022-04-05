import {
  Component, HostBinding, Input, OnInit,
} from '@angular/core';
import { IShorCards } from './short-card.interface';

@Component({
  selector: 'app-short-card',
  templateUrl: './short-card.component.html',
  styleUrls: ['./short-card.component.scss'],
})

export class ShortCardComponent implements OnInit {
  @Input() shortCard: IShorCards | undefined;

  colorClass: string | undefined;

  @HostBinding() class: string | undefined;

  private static getNumbersOfDay(publishDate?: string): number {
    const publishDay = Number(new Date(publishDate || new Date()));
    const dayNow = Number(new Date());
    const daysAgo = dayNow - publishDay;
    const oneDayMS = 1000 * 60 * 60 * 24;
    return Math.round(daysAgo / oneDayMS);
  }

  private static setColorClass(daysAgo: number): string {
    if (daysAgo > 182) return 'red';
    if (daysAgo < 30 && daysAgo ! > 7) return 'blue';
    return 'green';
  }

  ngOnInit() {
    const daysAgo = ShortCardComponent.getNumbersOfDay(this.shortCard?.publishedAt);
    this.colorClass = ShortCardComponent.setColorClass(daysAgo);
    this.class = this.colorClass;
  }
}
