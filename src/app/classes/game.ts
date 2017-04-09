import { Board } from './board';
import { Move } from './move';
export class Game {
    boards: Board[];
    play: number;
    
    constructor() {
        this.boards = [new Board(true)];
        this.play = 0;
    }

    currentBoard(): Board {
        return this.boards[this.play];
    }

    validMoves(): Move[] {
        return this.currentBoard().validMoves;
    }

    isGameOver(): boolean {
        return this.currentBoard().validMoves.length > 0;
    }

    whiteScore(): number {
        return this.currentBoard().whiteScore;
    } 

    blackScore(): number {
        return this.currentBoard().blackScore;
    }
}
