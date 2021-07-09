export function heuristic(queens: number[], tileMap: number[][]) {
  let h = 0;
  tileMap.forEach((row, i) => {
    row.forEach((element, j) => {
      if (
        i != j &&
        (queens[i] - i == queens[j] - j || queens[i] + i == queens[j] + j)
      ) {
        h++;
      }
    });
  });
  return h / 2;
}
