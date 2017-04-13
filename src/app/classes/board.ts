import { CellStatus } from '../enums/cell-status.enum';
import { Move } from './move'

export class Board {
    hasEnded: boolean;
    isValid: boolean;
    validMoves: Move[];

    whiteTurn: boolean;
    cells: CellStatus[];
    whiteScore: number;
    blackScore: number;
    whiteWeightedScore: number;
    blackWeightedScore: number;

    constructor(newGame?: boolean) {
        if (newGame) {
            this.hasEnded = false;
            this.isValid = true;
            this.whiteTurn = false;
            this.cells = [
                CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove,
                CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove,
                CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyValidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove,
                CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.black, CellStatus.white, CellStatus.emptyValidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove,
                CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyValidMove, CellStatus.white, CellStatus.black, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove,
                CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyValidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove,
                CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove,
                CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove, CellStatus.emptyInvalidMove
            ];
            this.whiteScore = 2;
            this.blackScore = 2;
            this.blackWeightedScore = 0;
            this.whiteWeightedScore = 0;
            this.validMoves = [
                new Move(false, 20, [20, 28, 36]),
                new Move(false, 29, [29, 28, 27]),
                new Move(false, 34, [34, 35, 36]),
                new Move(false, 43, [43, 35, 27])
            ];
        }
    }

    isCellBlack(cell: number): boolean {
        return this.cells[cell] == CellStatus.black;
    }

    isCellWhite(cell: number): boolean {
        return this.cells[cell] == CellStatus.white;
    }

    isCellEmpty(cell: number): boolean {
        return this.cells[cell] == CellStatus.emptyInvalidMove || this.cells[cell] == CellStatus.emptyValidMove;
    }

    isCellValidMove(cell: number): boolean {
        return this.cells[cell] == CellStatus.emptyValidMove;
    }

    nextTurn(): void {
        this.whiteTurn = !this.whiteTurn;
    }

    turnColor(): CellStatus {
        return this.whiteTurn? CellStatus.white : CellStatus.black;
    } 

    invalidate() {
        this.isValid = false;
        this.hasEnded = true;
    }

    hasValidMovesLeft(): boolean {
        return this.validMoves? this.validMoves.length > 0 : false;
    }   
}
