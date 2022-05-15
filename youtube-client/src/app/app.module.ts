import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppService } from "./app.service";
import { YoutubeModule } from "./youtube/youtube.module";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    YoutubeModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})

export class AppModule { }
