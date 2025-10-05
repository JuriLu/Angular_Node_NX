import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem/api-interfaces';

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  widgets: Widget[] = [
    { id: '1', title: 'Widget 01', description: 'pending' },
    { id: '2', title: 'Widget 02', description: 'pending' },
    { id: '3', title: 'Widget 03', description: 'pending' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
