import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { MainComponent } from './youtube/components/main/main.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { CardsBoxComponent } from './youtube/components/cards-box/cards-box.component';
import { DetailedCardComponent } from './youtube/components/detailed-card/detailed-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'video', pathMatch: 'full' },
  {
    path: 'video',
    component: MainComponent,
    children: [
      {
        path: '',
        component: CardsBoxComponent,
      },
      {
        path: ':id',
        component: DetailedCardComponent,
      },
    ],
  },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
