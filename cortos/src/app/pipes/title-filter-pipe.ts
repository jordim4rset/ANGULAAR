import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleFilter',
})
export class TitleFilterPipe implements PipeTransform {

  transform(events: any[], searchText: string): any[] {
    if(!events || !searchText) return events;
    
  }

}
