import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-list',
  imports: [FormsModule],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
  searchText = '';

  events = [
    {
      id: 1,
      title: 'evento 1',
    },
    {
      id: 2,
      title: 'evento 2'
    },
];
}
