import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { IShorCards } from './short-card.interface';

@Component({
  selector: 'app-short-card',
  templateUrl: './short-card.component.html',
  styleUrls: ['./short-card.component.scss'],
})

export class ShortCardComponent implements OnInit {
  @Input() shortCard: IShorCards | undefined;
  colorClass: string | undefined
  @HostBinding() class: string | undefined;

  private getNumbersOfDay(publishDate?: string): number {
    const publishDay = Number(new Date(publishDate || new Date()));
    const dayNow = Number(new Date());
    const daysAgo = dayNow - publishDay;
    const oneDayMS = 1000 * 60 * 60 * 24;
    return Math.round(daysAgo / oneDayMS);
  }

  ngOnInit() {
    const daysAgo = this.getNumbersOfDay(this.shortCard?.publishedAt);
    this.colorClass = daysAgo > 182 ? 'red' : daysAgo < 30 && daysAgo !> 7 ? 'blue' : 'green';
    this.class = this.colorClass;
  }
}
