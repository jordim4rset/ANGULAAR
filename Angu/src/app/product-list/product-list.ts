import { Component } from '@angular/core';
import { IProduct } from '../../app/interfaces/i-product';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  title = 'Mi lista de productos';
  headers = { image: 'Imagen', desc: 'Producto', price: 'Precio', avail: 'Disponible'};
  products: IProduct[] =
  [
    {
      id: 1,
      desc: 'SSD hard drive',
      avail: new Date('2016-10-03'),
      price: 75,
      imageUrl: '/img/ssd.jpg',
      rating: 5,
    },
    {
      id: 2,
      desc: 'LGA1151 Motherboard',
      avail: new Date('2016-10-03'),
      price: 75,
      imageUrl: '/img/motherboard.jpg',
      rating: 4,
    },
  ];
}
