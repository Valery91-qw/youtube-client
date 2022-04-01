import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-setting-button',
  templateUrl: './setting-button.component.html',
  styleUrls: ['./setting-button.component.scss'],
})
export class SettingButtonComponent {
  optionsIcon: string;
  @Input() changeVisibleCb?: () => void

  constructor() {
    this.optionsIcon = 'assets/Vector.png';
  }

  onClick() {
    if(this.changeVisibleCb) this.changeVisibleCb()
  }
}
