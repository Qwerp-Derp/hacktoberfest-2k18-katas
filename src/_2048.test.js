import { _2048 } from './_2048';

/*
 * The goal is to display the new state of the 2048 game after a move executed by the player.
 * 2048 is a game that is played on a 4x4 grid containing integers that are powers of 2.
 * For details of the game, please refer to https://open.kattis.com/problems/2048
 * 
 * The function takes in 2 parameters:
 * - a 4x4 array : the initial state of the game
 * - an integer : the player's move (0 for left, 1 for up, 2 for right, 3 for down)
 */

describe('_2048', () => {
  it('state 1, left', () => {
    expect(_2048([[   2,    0,  0, 2],
                  [   4,   16,  8, 2],
                  [   2,   64, 32, 4],
                  [1024, 1024, 64, 0]],
                  0))
          .toEqual([[   4, 0,   0, 0],
                    [   4, 16,  8, 2],
                    [   2, 64, 32, 4],
                    [2048, 64,  0, 0]]);
  });

  it('state 1, up', () => {
    expect(_2048([[   2,    0,  0, 2],
                  [   4,   16,  8, 2],
                  [   2,   64, 32, 4],
                  [1024, 1024, 64, 0]],
                  1))
          .toEqual([[   2,   16,  8, 4],
                    [   4,   64, 32, 4],
                    [   2, 1024, 64, 0],
                    [1024,    0,  0, 0]]);
  });

  it('state 1, right', () => {
    expect(_2048([[   2,    0,  0, 2],
                  [   4,   16,  8, 2],
                  [   2,   64, 32, 4],
                  [1024, 1024, 64, 0]],
                  2))
          .toEqual([[0,  0,    0,  4],
                    [4, 16,    8,  2],
                    [2, 64,   32,  4],
                    [0,  0, 2048, 64]]);
  });

  it('state 1, down', () => {
    expect(_2048([[   2,    0,  0, 2],
                  [   4,   16,  8, 2],
                  [   2,   64, 32, 4],
                  [1024, 1024, 64, 0]],
                  3))
          .toEqual([[   2,    0,  0, 0],
                    [   4,   16,  8, 0],
                    [   2,   64, 32, 4],
                    [1024, 1024, 64, 4]]);
  });

  it('state 2, left', () => {
    expect(_2048([[ 2,  2,  4,  8],
                  [ 4,  0,  4,  4],
                  [16, 16, 16, 16],
                  [32, 16, 16, 32]],
                  0))
          .toEqual([[ 4,  4,  8, 0],
                    [ 8,  4,  0, 0],
                    [32, 32,  0, 0],
                    [32, 32, 32, 0]]);
  });

  it('state 2, right', () => {
    expect(_2048([[ 2,  2,  4,  8],
                  [ 4,  0,  4,  4],
                  [16, 16, 16, 16],
                  [32, 16, 16, 32]],
                  2))
          .toEqual([[0,  4,  4,  8],
                    [0,  0,  4,  8],
                    [0,  0, 32, 32],
                    [0, 32, 32, 32]]);
  });
});
