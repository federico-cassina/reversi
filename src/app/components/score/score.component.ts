import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Board } from '../../classes/board';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  board: Board;

  constructor(private gameService: GameService) { 
    this.board = gameService.currentGame().currentBoard();
    gameService.currentBoard$.subscribe(board => {this.board = board;});
  }

  ngOnInit() {
  }

}
