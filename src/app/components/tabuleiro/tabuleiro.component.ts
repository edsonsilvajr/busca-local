import { Component, Input, OnInit } from '@angular/core';
import { Queen } from 'src/app/models/queen.model';
import { State, state } from 'src/app/models/state.model';
import { heuristic } from 'src/app/utils/heuristic';
import { hillClimbing } from 'src/app/utils/hillClimbing';
import { shuffle } from 'src/app/utils/shuffle';

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.scss'],
})
export class TabuleiroComponent implements OnInit {
  @Input() tileMap: number[][] = [];
  public state: State = state;
  public h = 0;
  public reset = 0;
  public pressed = false;
  public hover = false;

  constructor() {}

  ngOnInit(): void {
    this.simulateInitialState();
  }

  public run() {
    this.pressed = true;
    let teste = hillClimbing(this.state);
    this.state = teste.state;
    this.h = this.state.h;
    this.reset = teste.resets;
    this.resetMap();
    this.refreshGo();
  }

  public refreshGo() {
    for (let i = 0; i < 8; i++) {
      this.tileMap[this.state.queens[i]][i] = 1;
    }
  }

  public simulateInitialState() {
    this.state.queens = shuffle(state.queens);
    for (let i = 0; i < 8; i++) {
      this.tileMap[state.queens[i]][i] = 1;
    }
    this.h = heuristic(this.state.queens, this.tileMap);
    this.state.h = this.h;
  }

  public resetMap() {
    this.tileMap.forEach((row) => row.fill(0));
  }
}
