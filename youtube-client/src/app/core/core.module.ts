import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SettingButtonComponent } from './components/header/setting-button/setting-button.component';
import { SearchingFieldComponent } from './components/header/searching-field/searching-field.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { LoginFormComponent } from './components/header/login-form/login-form.component';
import { SubmitButtonComponent } from './components/header/searching-field/submit-button/submit-button.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SettingButtonComponent,
    SearchingFieldComponent,
    LogoComponent,
    LoginFormComponent,
    SubmitButtonComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent],
})

export class CoreModule {}
