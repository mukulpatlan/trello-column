import { Injectable, EventEmitter } from '@angular/core';
import { Widget } from '../models/widget.model';

@Injectable()
export class WidgetService {
  widgetsChanged = new EventEmitter<Widget[]>();

  private widget: Widget[]= [
    new Widget(1, 'Burger King', 1),
    new Widget(2, 'MacDonald', 1),
    new Widget(3, 'Subway', 1)
  ];

  getWidgets(){
    return this.widget.slice();
  }

  addWidget(widget: Widget){
    this.widget.push(widget);
    this.widgetsChanged.emit(this.widget.slice());
  }

  removeWidget(widgetIndex: number){
    this.widget.splice(widgetIndex, 1);
    this.widgetsChanged.emit(this.widget.slice())
  }
}
