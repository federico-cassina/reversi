import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule, MdSidenavModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { ScoreComponent } from './components/score/score.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ScoreComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'board',
        component: BoardComponent
      },
      {
        path: 'score',
        component: ScoreComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      }
    ])
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
