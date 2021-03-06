import { TestBed, inject } from '@angular/core/testing';

import { CellStatus } from '../enums/cell-status.enum';
import { GameService } from './game.service';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService]
    });
  });

  it('should process correctly 1 move', inject([GameService], (service: GameService) => {
    var move = service.newGame().validMoves[0];
    var board = service.processMove(move);
    expect(board.isValid).toBe(true);
    expect(board.hasEnded).toBe(false);
    expect(board.blackScore).toEqual(4);
    expect(board.blackWeightedScore).toEqual(4);
    expect(board.cells[0]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[1]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[2]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[3]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[4]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[5]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[6]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[7]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[8]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[9]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[10]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[11]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[12]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[13]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[14]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[15]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[16]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[17]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[18]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[19]).toEqual(CellStatus.emptyValidMove);
    expect(board.cells[20]).toEqual(CellStatus.black);
    expect(board.cells[21]).toEqual(CellStatus.emptyValidMove);
    expect(board.cells[22]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[23]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[24]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[25]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[26]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[27]).toEqual(CellStatus.black);
    expect(board.cells[28]).toEqual(CellStatus.black);
    expect(board.cells[29]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[30]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[31]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[32]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[33]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[34]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[35]).toEqual(CellStatus.white);
    expect(board.cells[36]).toEqual(CellStatus.black);
    expect(board.cells[37]).toEqual(CellStatus.emptyValidMove);
    expect(board.cells[38]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[39]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[40]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[41]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[42]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[43]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[44]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[45]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[46]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[47]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[48]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[49]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[50]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[51]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[52]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[53]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[54]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[55]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[56]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[57]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[58]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[59]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[60]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[61]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[62]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[63]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[0]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.whiteScore).toEqual(1);
    expect(board.whiteTurn).toBe(true);
    expect(board.whiteWeightedScore).toEqual(0);
  }));
});

/*
  it('should process correctly 2 moves', inject([GameService], (service: GameService) => {
    var move = service.newGame().validMoves[0];
    var board = service.processMove(move);
    board = service.processMove(board.validMoves[0]);
    expect(board.isValid).toBe(true);
    expect(board.hasEnded).toBe(false);
    expect(board.blackScore).toEqual(3);
    expect(board.blackWeightedScore).toEqual(4);
    expect(board.cells[0]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[1]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[2]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[3]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[4]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[5]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[6]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[7]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[8]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[9]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[10]).toEqual(CellStatus.emptyValidMove);
    expect(board.cells[11]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[12]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[13]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[14]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[15]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[16]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[17]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[18]).toEqual(CellStatus.emptyValidMove);
    expect(board.cells[19]).toEqual(CellStatus.white);
    expect(board.cells[20]).toEqual(CellStatus.black);
    expect(board.cells[21]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[22]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[23]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[24]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[25]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[26]).toEqual(CellStatus.emptyValidMove);
    expect(board.cells[27]).toEqual(CellStatus.white);
    expect(board.cells[28]).toEqual(CellStatus.black);
    expect(board.cells[29]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[30]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[31]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[32]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[33]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[34]).toEqual(CellStatus.emptyValidMove);
    expect(board.cells[35]).toEqual(CellStatus.white);
    expect(board.cells[36]).toEqual(CellStatus.black);
    expect(board.cells[37]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[38]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[39]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[40]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[41]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[42]).toEqual(CellStatus.emptyValidMove);
    expect(board.cells[43]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[44]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[45]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[46]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[47]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[48]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[49]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[50]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[51]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[52]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[53]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[54]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[55]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[56]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[57]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[58]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[59]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[60]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[61]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[62]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.cells[63]).toEqual(CellStatus.emptyInvalidMove);
    expect(board.whiteScore).toEqual(3);
    expect(board.whiteTurn).toBe(false);
    expect(board.whiteWeightedScore).toEqual(4);
  }));
});*/
