import {Component, EventEmitter, Input, Output } from '@angular/core';
import {Schedule} from '../app.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  @Input() value: Schedule;
  @Output() deleteEventInstanceEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  handleDeleteClick() {
    this.deleteEventInstanceEvent.emit(this.value);
  }

}
