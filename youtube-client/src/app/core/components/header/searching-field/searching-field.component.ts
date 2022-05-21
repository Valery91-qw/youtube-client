import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-searching-field',
  templateUrl: './searching-field.component.html',
  styleUrls: ['searching-field.component.scss'],
})

export class SearchingFieldComponent {
  searchingValue: string | undefined = undefined;
  @Input() disable!: boolean

  setSearchingString(value: string) {
    this.searchingValue = value;
  }
}
