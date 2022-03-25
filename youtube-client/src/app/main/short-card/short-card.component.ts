import {Component, Input} from '@angular/core';
import {IShorCards} from "./short-card.interface";

@Component({
  selector: 'app-short-card',
  templateUrl: './short-card.component.html',
  styleUrls: ['./short-card.component.scss']
})
export class ShortCardComponent {
  @Input() shortCard: IShorCards | undefined
}
