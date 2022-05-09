import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import {SettingButtonComponent} from "./components/header/setting-button/setting-button.component";
import {SearchingFieldComponent} from "./components/header/searching-field/searching-field.component";
import {LogoComponent} from "./components/header/logo/logo.component";
import {LoginFormComponent} from "./components/header/login-form/login-form.component";
import {SubmitButtonComponent} from "./components/header/searching-field/submit-button/submit-button.component";


@NgModule({
  declarations: [
    HeaderComponent,
    SettingButtonComponent,
    SearchingFieldComponent,
    LogoComponent,
    LoginFormComponent,
    SubmitButtonComponent
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    SettingButtonComponent,
    SearchingFieldComponent,
    LogoComponent,
    LoginFormComponent,
    SubmitButtonComponent
  ],
})

export class CoreModule {}
