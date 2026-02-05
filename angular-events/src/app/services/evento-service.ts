import { Injectable } from '@angular/core';

export interface IEvent {
  title: string;
  image: string;
  date: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})

export class EventoService {
  private events: IEvent[] = [
    {
      title: 'Champions',
      image: 'img/champions.jpg',
      date: '2026/06/20',
      description: 'Campeonato de clubes europeo',
      price: 300
    },
    {
      title: 'Mundial',
      image: 'img/mundial.jpg',
      date: '2026/07/10',
      description: 'Campeonato Mundial de selecciones',
      price: 350
    }
  ];

  getEventos(): IEvent[] {
    return [...this.events];
  }
}

