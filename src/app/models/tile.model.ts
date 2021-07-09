export const createTiles = (rows: number, columns: number) => {
  const tileMap: number[][] = [];
  let tileRow: number[] = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      tileRow.push(0);
    }
    tileMap.push(tileRow);
    tileRow = [];
  }
  return tileMap;
};
