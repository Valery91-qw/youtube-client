import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FilterBlockComponent} from "./components/filter-block/filter-block.component";
import {MainComponent} from "./components/main/main.component";
import {ShortCardComponent} from "./components/main/short-card/short-card.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    FilterBlockComponent,
    MainComponent,
    ShortCardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [FilterBlockComponent, MainComponent]
})

export class YoutubeModule {}
