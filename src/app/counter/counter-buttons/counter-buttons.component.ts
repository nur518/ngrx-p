import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent implements OnInit {
  @Output() incrementEvent = new EventEmitter<void>();
  @Output() decrementEvent = new EventEmitter<void>();
  @Output() resetEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onIncrement(): void {
    this.incrementEvent.emit();
  }
  onDecrement(): void {
    this.decrementEvent.emit();
  }
  onReset(): void {
    this.resetEvent.emit();
  }
}
