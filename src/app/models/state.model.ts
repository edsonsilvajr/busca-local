import { Queen } from './queen.model';

export interface State {
  queens: number[];
  h: number;
  neighborhood: State[];
}

export const state: State = {
  queens: [0, 1, 2, 3, 4, 5, 6, 7],
  h: 0,
  neighborhood: [],
};
