import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent {
  @Input() count: number;
  @Output() countChanged = new EventEmitter();
  constructor() { }

  onCountChange(value) {
    if (value === '+') {
      this.count = this.count + 1;
    } else if (value === '-') {
      this.count = this.count - 1;
    }
    this.countChanged.emit(this.count);
  }
}
