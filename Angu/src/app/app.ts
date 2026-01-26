import { Component, signal } from '@angular/core';
import { ProductList } from './product-list/product-list';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('product-list');
}
