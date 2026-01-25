import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events-show',
  imports: [FormsModule],
  templateUrl: './events-show.html',
  styleUrls: ['./events-show.css'],
})
export class EventsShow {

  newEvent: IEvent = {
    title: "",
    description: "",
    image: "",
    price: 0,
    date: ""
  }

  addEvent(){
    this.Events.push({...this.newEvent});

    this.newEvent = {
      title: "",
      description: "",
      image: "",
      price: 0,
      date: ""
    }
  }



  Events: IEvent[] = [
    {
      title: 'Champions',
      image: '/img/champions.jpg',
      date: '2026/06/20',
      description: 'Campeonato de clubes europeo',
      price: 300
    },
    {
      title: 'Mundial',
      image: '/img/mundial.jpg',
      date: '2026/07/10',
      description: 'Campeonato Mundial de selecciones',
      price: 350
    }
  ];

  search = "";

  orderPrice() {
    this.Events.sort((a,b) => a.price - b.price);
  }

  orderDate(){
    this.Events.sort((a, b) => a.date > b.date ? 1 : -1);
  }

  changeImage(fileInput: HTMLInputElement){
    if(!fileInput.files || fileInput.files.length === 0){
      return;
    }
    const reader: FileReader = new FileReader();

    reader.addEventListener('loadend', (e) => {
      this.newEvent.image = reader.result as string;
    });

    reader.readAsDataURL(fileInput.files[0]);
  }
}

export interface IEvent {
  title: string;
  image: string;
  date: string;
  description: string;
  price: number;
}
