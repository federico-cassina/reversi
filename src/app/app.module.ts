import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Just for materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';


import { BoardComponent } from './components/board/board.component';
import { ScoreComponent } from './components/score/score.component';
import { HistoryComponent } from './components/history/history.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ScoreComponent,
    HistoryComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
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
  exports: [MaterialModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
