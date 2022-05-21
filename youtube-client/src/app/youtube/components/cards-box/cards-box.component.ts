import { Component, Input } from '@angular/core';
import { IShorCards } from './short-card/short-card.interface';
import ISortingOptions from '../filter-block/filter-block.interface';

@Component({
  selector: 'app-cards-box',
  templateUrl: './cards-box.component.html',
  styleUrls: ['./cards-box.component.scss'],
})

export class CardsBoxComponent {
  @Input() searchingResults: IShorCards[] | undefined;

  @Input() sortingOptions: ISortingOptions | undefined;
}
