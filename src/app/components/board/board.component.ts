import { Component, OnInit } from '@angular/core';
import { Board } from '../../classes/board';
import { Move } from '../../classes/move';
import { GameService } from '../../services/game.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [GameService]
})
export class BoardComponent implements OnInit {

  board: Board;
  diagnostics: string;


  constructor(private gameService: GameService) { }

  processMove(move: number): void {
    this.diagnostics = "move " + move;
    for (var i = 0; i < this.board.validMoves.length; i++) {
      if (this.board.validMoves[i].cell == move) {
        this.board = this.gameService.processMove(this.board.validMoves[i]);
      }
    }
  }

  ngOnInit() {
    this.board = this.gameService.newGame();  
  }

}
