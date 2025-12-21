import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsShow } from './events-show/events-show';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, EventsShow],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular-events');
}
