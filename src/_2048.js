// Enum to show the possible directions in a more readable way
const States = {
  Left:  0,
  Up:    1,
  Right: 2,
  Down:  3
};

// Flips a square grid along x=y, that is, from the top-left
// square to the bottom-right square
function rotate(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = grid[i][j];
      grid[i][j] = grid[j][i];
      grid[j][i] = temp;
    }
  }

  return grid;
}

// Given a row of numbers like [2, 2, 4, 8], goes through that
// list and reduces them once according to 2048 rules.
// [2, 2, 4, 8] going right -> [0, 4, 4, 8]
function reduce_row(row, direction) {
  let filtered_row = row.filter((n) => n != 0);
  
  if (direction == States.Right || direction == States.Down) {
    filtered_row = filtered_row.reverse();
  }

  let index = 0;

  while (index < filtered_row.length - 1) {
    if (filtered_row[index] == filtered_row[index + 1]) {
      filtered_row[index] *= 2;
      filtered_row.splice(index + 1, 1);
    }

    index += 1;
  }

  while (filtered_row.length < row.length) {
    filtered_row.push(0);
  }

  if (direction == States.Right || direction == States.Down) {
    filtered_row = filtered_row.reverse();
  }

  return filtered_row;
}

// Main function: flips the grid to align left-to-right
// instead of up-to-down if the direction is Up or Down,
// reduces all the rows, then flips the grid once again
// to its original position
export const _2048 = (grid, direction) => {
  if (direction == States.Up || direction == States.Down) {
    grid = rotate(grid);
  }

  for (let i = 0; i < 4; i++) {
    grid[i] = reduce_row(grid[i], direction);
  }

  if (direction == States.Up || direction == States.Down) {
    grid = rotate(grid);
  }

  return grid;
};
