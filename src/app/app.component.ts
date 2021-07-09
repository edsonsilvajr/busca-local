import { Component } from '@angular/core';
import { defaultEnvironment } from './models/environment.model';
import { createTiles } from './models/tile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'busca-local';
  public settings = defaultEnvironment;
  public tileMap = createTiles(this.settings.rows, this.settings.columns);
}
