import { Component, EventEmitter, Input } from '@angular/core';
import { Widget } from '@fem/api-interfaces';

@Component({
  selector: 'fem-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss'],
})
export class WidgetsListComponent {
  @Input() widgets: Widget[];
  @Input() readonly: boolean = false;
  @Input() selected: EventEmitter<boolean> = new EventEmitter();
  @Input() deleted: EventEmitter<boolean> = new EventEmitter();
}
