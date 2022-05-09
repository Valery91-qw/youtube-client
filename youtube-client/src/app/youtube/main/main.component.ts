import { Component, Input } from '@angular/core';
import { IShorCards } from './short-card/short-card.interface';
import ISortingOptions from "../filter-block/filter-block.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent {
  @Input() searchingResults: IShorCards[] | undefined;

  @Input() sortingOptions: ISortingOptions | undefined;
}
