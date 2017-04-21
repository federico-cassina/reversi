import { Component, ViewChild } from '@angular/core';
import { BoardComponent } from './components/board/board.component'
import { ScoreComponent } from './components/score/score.component'
import { GameService } from './services/game.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameService]
})
export class AppComponent {

  @ViewChild(BoardComponent)
  private boardComponent: BoardComponent;

  @ViewChild(ScoreComponent)
  private scoreComponent: ScoreComponent;

  constructor(private service: GameService) {
  }

  newGame(): void {
    this.service.newGame();
    this.boardComponent.board = this.service.currentGame().currentBoard();
    this.scoreComponent.board = this.boardComponent.board;
  }

  undoMove(): void {
    this.service.undoMove();
    this.boardComponent.board = this.service.currentGame().currentBoard();
    this.scoreComponent.board = this.boardComponent.board;
  }

  moveAI() {
    this.service.moveAI();
    this.boardComponent.board = this.service.currentGame().currentBoard();
    this.scoreComponent.board = this.boardComponent.board;
  }
}

