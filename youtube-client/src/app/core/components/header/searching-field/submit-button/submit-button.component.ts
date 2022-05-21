import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss'],
})
export class SubmitButtonComponent {
  title: string;
  @Input() disable!: boolean;

  constructor() {
    this.title = 'search';
  }
}
