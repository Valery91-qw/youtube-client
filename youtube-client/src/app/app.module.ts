import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './common/button/button.component';
import { SearchingFieldComponent } from './header/searching-field/searching-field.component';
import { SortingComponent } from './header/sorting/sorting.component';
import { MainComponent } from './main/main.component';
import { ShortCardComponent } from './main/short-card/short-card.component';
import { LoginFormComponent } from "./header/login-form/login-form.component";

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
