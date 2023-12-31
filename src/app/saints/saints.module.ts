import { NgModule } from '@angular/core';

import { ListComponent } from './list/list.component';
import { SaintComponent } from './saint/saint.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    SaintComponent],
  declarations: [
    ListComponent,
    SaintComponent
  ],
  providers: [],
})
export class SaintsModule { }
