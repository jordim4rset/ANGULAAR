import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from '../services/evento-service';

@Component({
  selector: 'app-evento-item',
  imports: [],
  templateUrl: './evento-item.html',
  styleUrl: './evento-item.css',
})
export class EventoItem {

  @Input() event!: IEvent;

  @Output() delete = new EventEmitter<void>();

  deleteEvento() {
    this.delete.emit();
  }

}
