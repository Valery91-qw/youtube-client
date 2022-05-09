import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterBlockComponent } from './youtube/filter-block/filter-block.component';
import { MainComponent } from './youtube/main/main.component';
import { ShortCardComponent } from './youtube/main/short-card/short-card.component';
import { FilterPipe } from './youtube/filter-block/pipes/filter.pipe';
import { CoreModule } from './core/core.module';
import {AppService} from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    FilterBlockComponent,
    MainComponent,
    ShortCardComponent,
    FilterPipe,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})

export class AppModule { }
