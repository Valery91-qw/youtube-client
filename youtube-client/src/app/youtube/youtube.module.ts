import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBlockComponent } from './components/filter-block/filter-block.component';
import { CardsBoxComponent } from './components/cards-box/cards-box.component';
import { ShortCardComponent } from './components/cards-box/short-card/short-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FilterBlockComponent,
    CardsBoxComponent,
    ShortCardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [FilterBlockComponent, CardsBoxComponent],
})

export class YoutubeModule {}
