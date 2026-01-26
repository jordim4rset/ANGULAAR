import { Component } from '@angular/core';
import { IncidentItem } from '../incident-item/incident-item';

@Component({
  selector: 'app-incident-list',
  imports: [IncidentItem],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.css',
})
export class IncidentList {

  incidents =
  [
    {
      id: 1,
      type: 'Eror1',
      desc: 'No se puede acceder',
      status: 'Pendiente'
    },
    {
      id: 2,
      type: 'Eror2',
      desc: 'No se puede ver',
      status: 'Pendiente'
    }
  ]
}
