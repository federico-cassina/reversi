import { Injectable } from '@angular/core';
import { Game } from '../classes/game';
import { Move } from '../classes/move';
import { Board } from '../classes/board';
import { WEIGHTS } from '../classes/board-weight'
import { CellStatus } from '../enums/cell-status.enum';

@Injectable()
export class GameService {

  game: Game;

  constructor() { 
    this.game = new Game();
  }

  newGame(): Board {
    this.game = new Game();
    return this.game.currentBoard();
  }

  currentGame(): Game {
    return this.game;
  }

  processMove(move: Move) : Board {
    var previous = this.game.currentBoard();
    var newBoard = new Board();
    newBoard.cells = previous.cells.slice();
    if (!previous.isCellValidMove(i)) {
      newBoard.invalidate();
    } else {
      newBoard.nextTurn();
      var searchColor = previous.turnColor();
      var process = function(action: (m: number, c: CellStatus, v: number[], b: CellStatus[]) => number, start: number, color: CellStatus,  cells: CellStatus[]): number[] {
        var propagate = function(limit: (p: number) => boolean, next: (o: number) => number, action: (m: number, c: CellStatus, v: number[], b: CellStatus[]) => number, start: number, color: CellStatus,  cells: CellStatus[]): number[] {
          var position = start;
          var visited: number[] = [];
          while (limit(position)) {
            position = next(position);
            if (cells[position] == CellStatus.emptyInvalidMove || cells[position] == CellStatus.emptyValidMove) {
              break;
            }
            visited.push(position);
            if (cells[position] == color) {
              action(start, color, visited, cells);
              return visited;
            }
          }
          return [];
        };
        var processed: number[] = [ start ];
        processed.concat(propagate(function(position: number): boolean { return position > 7; }, function(old: number): number { return old - 8; }, action, start, color, cells)); //Up
        processed.concat(propagate(function(position: number): boolean { return position < 56; }, function(old: number): number { return old + 8; }, action, start, color, cells)); //Down
        processed.concat(propagate(function(position: number): boolean { return position % 8 > 0; }, function(old: number): number { return old - 1; }, action, start, color, cells)); //Left
        processed.concat(propagate(function(position: number): boolean { return position % 8 < 7; }, function(old: number): number { return old + 1; }, action, start, color, cells)); //Right
        processed.concat(propagate(function(position: number): boolean { return position > 7 || position % 8 > 0; }, function(old: number): number { return old - 9; }, action, start, color, cells)); //Up and Left
        processed.concat(propagate(function(position: number): boolean { return position > 7 || position % 8 < 7; }, function(old: number): number { return old - 7; }, action, start, color, cells)); //Up and Right
        processed.concat(propagate(function(position: number): boolean { return position < 56 || position % 8 > 0; }, function(old: number): number { return old + 7; }, action, start, color, cells)); //Down and Left
        processed.concat(propagate(function(position: number): boolean { return position < 56 || position % 8 < 7; }, function(old: number): number { return old + 9; }, action, start, color, cells)); //Down and Right
        return processed;
      };
      var turnPieces = function(start: number, color: CellStatus, visited: number[], cells: CellStatus[]): number {
        for (var i = 0; i < visited.length; i++) {
          cells[visited[i]] = color;
        }
        return visited.length;
      };
      process(turnPieces, move.cell, searchColor, newBoard.cells);
      var markValidMove = function(start: number, color: CellStatus, visited: number[], cells: CellStatus[]): number {
        cells[start] = CellStatus.emptyValidMove;
        return 0;
      };
      for (var i = 0; i < 64; i++) {
        if (newBoard.isCellBlack(i)) {
          newBoard.blackWeightedScore += WEIGHTS[i];
          newBoard.blackScore++;
        } else if (newBoard.isCellWhite(i)) {
          newBoard.whiteWeightedScore += WEIGHTS[i];
          newBoard.whiteScore++;
        } else {
          var validMove = process(markValidMove, i, newBoard.whiteTurn? CellStatus.white : CellStatus.black, newBoard.cells);
          if (validMove.length > 1) {
            newBoard.validMoves.push(new Move(newBoard.whiteTurn, i, validMove));
          }
        }
      }
      if (newBoard.hasValidMovesLeft()) {
        newBoard.hasEnded = true;
      } else {
        this.game.boards.push(newBoard);
      }
    }
    return newBoard;
  }

}
