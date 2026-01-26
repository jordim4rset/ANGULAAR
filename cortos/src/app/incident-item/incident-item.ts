import { Component } from '@angular/core';

@Component({
  selector: '[app-incident-item]',
  imports: [],
  templateUrl: './incident-item.html',
  styleUrl: './incident-item.css',
})
export class IncidentItem {

  incidents =
  [
    {
      id: 1,
      type: 'Eror',
      desc: 'No se puede acceder',
      status: 'Pendiente'
    },
    {
      id: 2,
      type: 'Eror',
      desc: 'No se puede acceder',
      status: 'Pendiente'
    },
  ]

}
