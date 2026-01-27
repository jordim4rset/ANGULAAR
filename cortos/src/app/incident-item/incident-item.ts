import { Component, EventEmitter } from '@angular/core';
import { IncidentList } from '../incident-list/incident-list';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: '[app-incident-item]',
  imports: [],
  templateUrl: './incident-item.html',
  styleUrl: './incident-item.css',
})
export class IncidentItem {

  @Input() incidencia: any;

  //GUARDAMOS EL STADO NUEVO
  auxStatus = 'funcionando';

  //DECIMOS QUE VAMOS A MANDAR UN EVENTO LLAMADO MODIFICARSTATUS
  @Output() modificarStatus = new EventEmitter<string>();

  //HACEMOS UNA FUNCIÓN QUE MODIFICA EL STADO Y MANDA UN EVENTO QUE CAMBA EL VALOR DEL ESTADO
  cambiarStatus(){
    if(this.auxStatus == 'funcionando'){
      this.modificarStatus.emit(this.auxStatus);
      this.auxStatus = 'pendiente';
    }else{
      this.modificarStatus.emit(this.auxStatus);
      this.auxStatus = 'funcionando';
    }
  }
}
