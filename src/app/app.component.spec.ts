import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { ScoreComponent } from './components/score/score.component';
import { HistoryComponent } from './components/history/history.component';
import { APP_BASE_HREF } from '@angular/common';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        MaterialModule, 
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
      declarations: [
        AppComponent,
        BoardComponent,
        ScoreComponent,
        HistoryComponent
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
