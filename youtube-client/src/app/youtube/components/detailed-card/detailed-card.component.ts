import { Component, Input } from '@angular/core';
import { IDetailedCardInterface } from './detailed-card.interface';

@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.scss'],
})

export class DetailedCardComponent {
  @Input() detailedCard!: IDetailedCardInterface;
}
