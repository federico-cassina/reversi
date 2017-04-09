import { WEIGHTS } from './board-weight'

export class Move {
    isWhite: boolean;
    cell: number;
    affected: number[];
    value: number;
    constructor(isWhite: boolean, cell: number, affected: number[]) {
        this.isWhite = isWhite;
        this.cell = cell;
        this.affected = affected;
        for (let i = 1; i < affected.length - 1; i++) {
            this.value += WEIGHTS[i];
        }
    }
}
