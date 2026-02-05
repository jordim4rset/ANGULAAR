import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventoItem } from '../evento-item/evento-item';
import { EventoAdd } from '../evento-add/evento-add';
import { EventoService, IEvent } from '../services/evento-service';


@Component({
  selector: 'app-events-show',
  imports: [FormsModule, EventoItem, EventoAdd],
  templateUrl: './events-show.html',
  styleUrls: ['./events-show.css'],
})

export class EventsShow {

  Events: IEvent[] = [];
  search = "";

  constructor(private eventoService: EventoService){}

  ngOnInit(){
    this.Events = this.eventoService.getEventos();
  }

  orderPrice(){
    this.Events.sort((a, b) => a.price - b.price);
  }

  orderDate(){
    this.Events.sort((a, b) => a.date > b.date ? 1 : -1);
  }

  eliminarEvento(eventoABorrar: IEvent){
    this.Events = this.Events.filter(e => e !== eventoABorrar);
  }

  anyadirEvento(nuevo: IEvent){
    this.Events = [...this.Events, nuevo];
  }
}
