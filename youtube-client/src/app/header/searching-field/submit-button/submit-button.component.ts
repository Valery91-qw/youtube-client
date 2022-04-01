import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss'],
})
export class SubmitButtonComponent {
  @Input() addResultsCb?: () => void;
  title: string;

  constructor() {
    this.title = 'search';
  }

  onClick() {
    if(this.addResultsCb) this.addResultsCb()
  }
}
