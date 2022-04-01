import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-searching-field',
  templateUrl: './searching-field.component.html',
  styleUrls: ['searching-field.component.scss'],
})

export class SearchingFieldComponent {
  @Input() addResultsCb?: () => void;
  searchingValue: string | undefined = undefined;

  setSearchingString(value: string) {
    this.searchingValue = value;
  }
}
