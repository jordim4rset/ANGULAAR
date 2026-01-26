import { Component, signal } from '@angular/core';
import { StatusRow } from './status-row/status-row';
import { UserProfile } from './user-profile/user-profile';
import { TextStyle } from './text-style/text-style';
import { HoverButton } from './hover-button/hover-button';
import { SearchBox } from './search-box/search-box';
import { PriceView } from './price-view/price-view';
import { EventList } from './event-list/event-list';
import { LifecycleTest } from './lifecycle-test/lifecycle-test';

@Component({
  selector: 'app-root',
  imports: [LifecycleTest, UserProfile, TextStyle, StatusRow, HoverButton, SearchBox, PriceView, EventList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('user-profile');
}
