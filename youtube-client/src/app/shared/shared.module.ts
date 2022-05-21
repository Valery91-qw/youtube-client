import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { MockService } from './services/mock.service';

@NgModule({
  declarations: [FilterPipe],
  imports: [CommonModule],
  providers: [MockService],
  exports: [FilterPipe],
})

export class SharedModule {}
