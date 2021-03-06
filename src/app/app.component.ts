import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number;
  constructor() {
    this.count = 0;
  }

  displayCount(count) {
    this.count = count;
  }
}
