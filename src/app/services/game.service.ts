import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Game } from '../classes/game';
import { Move } from '../classes/move';
import { Board } from '../classes/board';
import { WEIGHTS } from '../classes/board-weight'
import { CellStatus } from '../enums/cell-status.enum';

@Injectable()
export class GameService {

  game: Game;

  private boardSource = new Subject<Board>();

  currentBoard$ = this.boardSource.asObservable();

  constructor() { 
    this.game = new Game();
  }

  newGame(): Board {
    this.game = new Game();
    this.boardSource.next(this.game.currentBoard());
    return this.game.currentBoard();
  }

  undoMove(): void {
    this.game.boards.pop();
    this.game.play--;
    this.boardSource.next(this.game.currentBoard());
    return;
  }

  currentGame(): Game {
    return this.game;
  }

  private propagateOneDirection(limit: (p: number) => boolean, next: (o: number) => number, action: (m: number, c: CellStatus, v: number[], b: CellStatus[]) => number, start: number, color: CellStatus,  cells: CellStatus[]): number[] {
    var position = start;
    var visited: number[] = [ start ];
    while (limit(position)) {
      position = next(position);
      if (cells[position] == CellStatus.emptyInvalidMove || cells[position] == CellStatus.emptyValidMove) {
        break;
      }
      visited.push(position);
      if (cells[position] == color) {
        if (visited.length > 2) {
          action(start, color, visited, cells);
          return visited;
        } else {
          return [];
        }
      }
    }
    return [];
  }

  private propagateEveryDirection(action: (m: number, c: CellStatus, v: number[], b: CellStatus[]) => number, start: number, color: CellStatus,  cells: CellStatus[]): number[] {
    var processed: number[] = [ start ];
    processed = processed.concat(this.propagateOneDirection(function(position: number): boolean { return position > 7; }, function(old: number): number { return old - 8; }, action, start, color, cells)); //Up
    processed = processed.concat(this.propagateOneDirection(function(position: number): boolean { return position < 56; }, function(old: number): number { return old + 8; }, action, start, color, cells)); //Down
    processed = processed.concat(this.propagateOneDirection(function(position: number): boolean { return position % 8 > 0; }, function(old: number): number { return old - 1; }, action, start, color, cells)); //Left
    processed = processed.concat(this.propagateOneDirection(function(position: number): boolean { return position % 8 < 7; }, function(old: number): number { return old + 1; }, action, start, color, cells)); //Right
    processed = processed.concat(this.propagateOneDirection(function(position: number): boolean { return position > 7 && position % 8 > 0; }, function(old: number): number { return old - 9; }, action, start, color, cells)); //Up and Left
    processed = processed.concat(this.propagateOneDirection(function(position: number): boolean { return position > 7 && position % 8 < 7; }, function(old: number): number { return old - 7; }, action, start, color, cells)); //Up and Right
    processed = processed.concat(this.propagateOneDirection(function(position: number): boolean { return position < 56 && position % 8 > 0; }, function(old: number): number { return old + 7; }, action, start, color, cells)); //Down and Left
    processed = processed.concat(this.propagateOneDirection(function(position: number): boolean { return position < 56 && position % 8 < 7; }, function(old: number): number { return old + 9; }, action, start, color, cells)); //Down and Right
    return processed;
  }

  private turnPieces(start: number, color: CellStatus, board: Board): void {
      var turnPieces = function(start: number, color: CellStatus, visited: number[], cells: CellStatus[]): number {
        for (var i = 0; i < visited.length; i++) {
          cells[visited[i]] = color;
        }
        return visited.length;
      };
      this.propagateEveryDirection(turnPieces, start, color, board.cells);
  }

  private markValids(board: Board): void {
      var markValidMove = function(start: number, color: CellStatus, visited: number[], cells: CellStatus[]): number {
        cells[start] = CellStatus.emptyValidMove;
        return 0;
      };
      for (let i = 0; i < 64; i++) {
        if (board.isCellBlack(i)) {
          board.blackWeightedScore += WEIGHTS[i];
          board.blackScore++;
        } else if (board.isCellWhite(i)) {
          board.whiteWeightedScore += WEIGHTS[i];
          board.whiteScore++;
        } else {
          board.cells[i] = CellStatus.emptyInvalidMove;
          var validMove = this.propagateEveryDirection(markValidMove, i, board.turnColor(), board.cells);
          if (validMove.length > 1) {
            board.validMoves.push(new Move(board.whiteTurn, i, validMove));
          }
        }
      }
    
  }

  private checkGameOver(board: Board): void {
      if (board.hasValidMovesLeft()) {
        board.hasEnded = false;
        board.isValid = true;
      } else {
        board.invalidate();
      }
  }

  processMove(move: Move) : Board {
    var previous = this.game.currentBoard();
    var newBoard = new Board(false, previous);

    if (!previous.isCellValidMove(move.cell)) {
      newBoard.invalidate();
    } else {
      this.turnPieces(move.cell, previous.turnColor(), newBoard);
      this.markValids(newBoard);
      this.game.play++;
      this.game.boards.push(newBoard);
      this.checkGameOver(newBoard);
    }
    this.boardSource.next(this.game.currentBoard());
    return newBoard;
  }

  private scoreMove(move: Move): number {
    var score = 0;
    for (var cell in move.affected) {
      score += WEIGHTS[cell];
    }
    return score;
  }

  moveAI() : Board {
    var bestMove: Move;
    var bestMoveScore = 0;
    for (var i; i <  this.game.currentBoard().validMoves.length; i++) {
      var score = this.scoreMove(this.game.currentBoard().validMoves[i]);
      bestMove = bestMove == null && score > bestMoveScore? this.game.currentBoard().validMoves[i] : bestMove;
    }
    return this.processMove(bestMove);
  }

}
