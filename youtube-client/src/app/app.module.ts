import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './common/button/button.component';
import { SearchingFieldComponent } from './header/searching-field/searching-field.component';
import { SortingComponent } from './sorting/sorting.component';
import { MainComponent } from './main/main.component';
import { ShortCardComponent } from './main/short-card/short-card.component';
import { LoginFormComponent } from './header/login-form/login-form.component';
import { SubmitButtonComponent } from './header/searching-field/submit-button/submit-button.component';
import { LogoComponent } from './header/logo/logo.component';
import { SettingButtonComponent } from './header/setting-button/setting-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    SearchingFieldComponent,
    SortingComponent,
    MainComponent,
    ShortCardComponent,
    LoginFormComponent,
    SubmitButtonComponent,
    LogoComponent,
    SettingButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
