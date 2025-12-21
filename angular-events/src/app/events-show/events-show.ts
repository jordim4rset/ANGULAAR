import { Component } from '@angular/core';

@Component({
  selector: 'app-events-show',
  imports: [],
  templateUrl: './events-show.html',
  styleUrls: ['./events-show.css'],
})
export class EventsShow {
  Events: IEvent[] = [
    {
      title: 'Champions',
      image: '',
      date: '2026/06/20',
      description: 'Campeonato de clubes europeo',
      price: 950,
    },
    {
      title: 'Mundial',
      image: '',
      date: '2026/07/10',
      description: 'Campeonato Mundial de selecciones',
      price: 850
    }
  ];
}

export interface IEvent {
  title: string;
  image: string;
  date: string;
  description: string;
  price: number;
}
