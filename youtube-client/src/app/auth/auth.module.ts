import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginPageComponent} from "./components/login-page/login-page.component";

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule],
  exports: [LoginPageComponent],
})

export class AuthModule {}
