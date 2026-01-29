import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IncidentService {

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
  ];


  getIncidents(){
    
  }
}
