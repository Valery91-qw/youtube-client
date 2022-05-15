import {NgModule} from "@angular/core";
import {FilterPipe} from "./pipes/filter.pipe";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [FilterPipe],
  imports: [CommonModule],
  exports: [FilterPipe],
})

export class SharedModule {}
