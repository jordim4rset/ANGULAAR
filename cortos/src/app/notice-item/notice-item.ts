import { Component } from '@angular/core';

@Component({
  selector: 'app-notice-item',
  imports: [],
  templateUrl: './notice-item.html',
  styleUrl: './notice-item.css',
})
export class NoticeItem {

  notices =
  [
    {
      id: 1,
      title: "AvisoImportante1",
    },
    {
      id: 2,
      title: "AvisoImportante2",
    },
    {
      id: 3,
      title: "AvisoImportante3",
    }
  ];
}
