import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FilterBlockComponent} from "./components/filter-block/filter-block.component";
import {MainComponent} from "./components/main/main.component";
import {ShortCardComponent} from "./components/main/short-card/short-card.component";
import {FilterPipe} from "./components/filter-block/pipes/filter.pipe";

@NgModule({
  declarations: [
    FilterBlockComponent,
    MainComponent,
    ShortCardComponent,
    FilterPipe,
  ],
  imports: [CommonModule],
  exports: [FilterBlockComponent, MainComponent]
})

export class YoutubeModule {}
