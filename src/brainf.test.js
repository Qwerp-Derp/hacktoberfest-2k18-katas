import { brainf } from './brainf';

/*
 * Your task is to implement brainf**k in JavaScript.
 * 
 * Brainf**k operates on a 30,000-cell long tape, with each cell
 * containing a value from 0 to 255. You start off on the 0th cell,
 * and you can move between cells to increase and decrease their values.
 * 
 * You can "wrap around" the tape, meaning that you can go left from the 0th
 * cell and end up on the last cell. The cell's values also wrap around, meaning
 * if you subtract 1 from 0 it ends up as 255.
 * 
 * There are 8 main instructions in BF:
 * - `+`: increases the value of the current cell by 1
 * - `-`: decreases the value of the current cell by 1
 * - `>`: you move 1 cell to the right
 * - `<`: you move 1 cell to the left
 * - `,`: takes an input from 0 to 255 and places it at the cell you're currently on
 * - `.`: takes the value of the cell you're currently on and outputs a number from 0 to 255
 * - `[`: begins a loop
 * - `]`: jumps back to the matching `[` in the program if the cell you're currently on is not 0
 * 
 * So, for example, in `[[]]`, the inner `[]` is a loop (so the first right bracket jumps to the
 * second left bracket), whereas `[..]` is also a loop (the second right bracket jumps to the
 * first left bracket).
 * 
 * `brainf()` takes two arguments:
 * - the program as a string
 * - a list of numbers from 0 to 255, which acts as the input for the program (defaults to [])
 * 
 * It must return an array of integers as output, based on the order when `.` is called. For example:
 * 
 * ```
 * +++.<-.
 * ```
 * 
 * The above code sample returns [3, 255], since the first `.` returns a value of `3` on
 * the 0th cell, and we're subtracting 1 from the 29,999th cell and outputting that, which
 * returns `255`.
 * 
 * For more details, go to [this website](https://esolangs.org/wiki/Brainfuck).
 */

describe('brainf', () => {
  it("processes + properly", () => {
    expect(brainf("+++.")).toEqual([3]);
    expect(brainf("+++-+-+.")).toEqual([3]);
  });

  it("processes <> properly", () => {
    expect(brainf("+++>++<.>.")).toEqual([3, 2]);
    expect(brainf("++>++>++>--.<.<.")).toEqual([0, 2, 2]);
  });

  it("processes [] properly", () => {
    expect(brainf("+++>[++<->]<.")).toEqual([6]);
  });

  it("processes user input properly", () => {
    expect(brainf(",+++.", [10])).toEqual([13]);
  });

  it("processes overflow properly", () => {
    expect(brainf(",+.", [255])).toEqual([0]);
    expect(brainf("---.")).toEqual([253]);
  });

  it("processes wrapping cells properly", () => {
    expect(brainf("<+++++.")).toEqual([5]);
  });

  it("can do harder examples", () => {
    expect(
      brainf("+[-->-[>>+>-----<<]<--<---]>-.>>>+.>>..+++[.>]<<<<.+++.------.<<-.>>>>+.")
    ).toEqual([..."Hello, World!"].map(char => char.charCodeAt(0)));
  });
});
