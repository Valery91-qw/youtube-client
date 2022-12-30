import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBlockComponent } from './components/filter-block/filter-block.component';
import { CardsBoxComponent } from './components/cards-box/cards-box.component';
import { ShortCardComponent } from './components/cards-box/short-card/short-card.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { DetailedCardComponent } from './components/detailed-card/detailed-card.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    FilterBlockComponent,
    CardsBoxComponent,
    ShortCardComponent,
    MainComponent,
    DetailedCardComponent,
  ],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  exports: [MainComponent],
})

export class YoutubeModule {}
