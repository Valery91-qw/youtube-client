import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { MainComponent } from './youtube/components/main/main.component';
import {NotFoundPageComponent} from "./core/components/not-found-page/not-found-page.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
