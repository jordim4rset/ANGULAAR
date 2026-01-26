import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../events-show/events-show';

@Pipe({
  name: 'eventsFilter',
})
export class EventsFilterPipe implements PipeTransform {

  transform(events: any[], search: string[]): any[] {
    if(!events || !search) return events;
    return events.filter((event) => event.title.toLowerCase().includes(search));
  }

}
