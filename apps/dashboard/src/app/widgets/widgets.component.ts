import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem/api-interfaces';

const mockWidgets: Widget[] = [
  { id: '1', title: 'Widget 01', description: 'pending' },
  { id: '2', title: 'Widget 02', description: 'pending' },
  { id: '3', title: 'Widget 03', description: 'pending' },
];

const emptyWidget: Widget = {
  id: null,
  title: '',
  description: '',
};

@Component({
  selector: 'fem-production-angular-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent implements OnInit {
  widgets: Widget[];
  selectedWidget: Widget = emptyWidget;

  constructor() {}

  ngOnInit(): void {
    this.reset();
  }

  reset(): void {
    this.loadWidgets();
    this.selectWidget(null);
  }

  resetForm(): void {
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget): void {
    this.selectedWidget = widget;
  }

  loadWidgets(): void {
    this.widgets = mockWidgets;
  }

  saveWidget(widget: Widget): void {
    if (widget.id) {
      this.updateWidget(widget);
    } else {
      this.createWidget;
    }
  }

  createWidget(widget: Widget): void {
    //create
    const newWidget = Object.assign({}, widget, { id: this.getRandomId() });
    this.widgets = [...this.widgets, newWidget];
    this.resetForm();
  }

  updateWidget(widget: Widget): void {
    //update
    this.widgets = this.widgets.map((w) => (w.id === widget.id ? widget : w));
    this.resetForm();
  }

  deleteWidget(widget: Widget): void {
    this.widgets = this.widgets.filter((w) => w.id !== widget.id);
    this.resetForm();
  }

  private getRandomId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}
