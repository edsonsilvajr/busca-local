import { State } from '../models/state.model';
import { createTiles } from '../models/tile.model';
import { heuristic } from './heuristic';
import { shuffle } from './shuffle';

export function hillClimbing(state: State): any {
  let actualState = { ...state };
  let nextState = null;
  let resets = 0;
  let i = 0;

  while (true) {
    i++;
    getNeighborhood(actualState);
    nextState = getBestNeighbor(actualState);

    if (nextState && nextState.h == 0) {
      return { state: nextState, resets };
    }

    actualState = nextState;
    if (i == 35) {
      i = 0;
      resets++;
      shuffle(actualState.queens);
      actualState.h = heuristic(actualState.queens, createTiles(8, 8));
    }
  }
}

function getNeighborhood(state: State) {
  let queens = [...state.queens];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      queens = [...state.queens];
      let toSwap = queens.findIndex((element) => element === j);
      if (j != state.queens[i]) {
        queens[i] = j;
        queens[toSwap] = state.queens[i];
      }
      let tileMap = createTiles(8, 8);
      state.neighborhood.push({
        queens,
        h: heuristic(queens, tileMap),
        neighborhood: [],
      });
    }
  }
}

function getBestNeighbor(state: State): any {
  let heuristics: number[] = [];
  state.neighborhood.forEach((element) => {
    heuristics.push(element.h);
  });
  return (
    state.neighborhood.find(
      (element) => element.h === Math.min(...heuristics)
    ) ?? null
  );
}
