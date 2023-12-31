import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaintComponent } from './saints/saint/saint.component';
import { ListComponent } from './saints/list/list.component';
import { CounterModule } from './counter/counter.module';
import { SaintsModule } from './saints/saints.module';
import { FullHouseModule } from './full-house/full-house.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CounterModule,
    BrowserModule,
    SaintsModule,
    FullHouseModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
