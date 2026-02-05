import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IEvent } from '../services/evento-service';

@Component({
  selector: 'app-evento-add',
  imports: [FormsModule],
  templateUrl: './evento-add.html',
  styleUrl: './evento-add.css',
})
export class EventoAdd {

  @Output() add = new EventEmitter<IEvent>();

  newEvent: IEvent = {title: '', description: '', image: '', price: 0, date: ''};

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files?.length) return;
    const reader = new FileReader();
    reader.onloadend = () => this.newEvent.image = reader.result as string;
    reader.readAsDataURL(fileInput.files[0]);
  }

  enviarFormulario(){
    this.add.emit({...this.newEvent});

    this.newEvent = {title: '', description: '', image: '', price: 0, date: ''}
  }
}
