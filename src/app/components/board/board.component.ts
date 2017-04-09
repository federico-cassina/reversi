import { Component, OnInit } from '@angular/core';
import { Board } from '../../classes/board';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [GameService]
})
export class BoardComponent implements OnInit {

  board: Board;

  constructor(private gameService: GameService) { }

  processMove(move: number): void {
    this.board = this.gameService.processMove(this.board.validMoves[move]);
  }

  ngOnInit() {
    this.board = this.gameService.newGame();  
  }

}
