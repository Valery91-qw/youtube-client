import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header/header.component';
import { SearchingFieldComponent } from './core/header/searching-field/searching-field.component';
import { FilterBlockComponent } from './core/filter-block/filter-block.component';
import { MainComponent } from './youtube/main/main.component';
import { ShortCardComponent } from './youtube/main/short-card/short-card.component';
import { LoginFormComponent } from './core/header/login-form/login-form.component';
import { SubmitButtonComponent } from './core/header/searching-field/submit-button/submit-button.component';
import { LogoComponent } from './core/header/logo/logo.component';
import { SettingButtonComponent } from './core/header/setting-button/setting-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchingFieldComponent,
    FilterBlockComponent,
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
