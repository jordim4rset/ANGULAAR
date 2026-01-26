import { Component } from '@angular/core';

@Component({
  selector: 'app-hover-button',
  imports: [],
  templateUrl: './hover-button.html',
  styleUrl: './hover-button.css',
})
export class HoverButton {

  count = 0;

  mensaje(){
    console.log('ratón sobre botón');
  }

  incrementar(){
    this.count++;
  }
}
