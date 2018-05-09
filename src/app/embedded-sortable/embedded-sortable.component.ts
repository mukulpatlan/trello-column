import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GroupPipe } from '../pipes/group.pipe';
import { Widget } from '../models/widget.model';
import { Container } from '../models/container.model';
import { ContainerService } from '../services/container.service';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'embedded-sortable',
  templateUrl: 'embedded-sortable.component.html',
  styleUrls: ['embedded-sortable.component.css'],
  providers: [GroupPipe]
})
export class EmbeddedSortableComponent implements OnInit {
  allWidgets: Widget[];
  containers: Container[];

  constructor(
    private _groupPipe: GroupPipe, 
    public containerService: ContainerService, 
    public widgetService: WidgetService
  ) { }

  ngOnInit() {
    this.containers = this.containerService.getContainers();
    this.allWidgets = this.widgetService.getWidgets();
    this.widgetService.widgetsChanged.subscribe(
      (widgets: Widget[]) => {
        this.allWidgets = widgets;
      }
    )
  }

  removCard(widget: Widget){
    let widgetIndex: number = this.allWidgets.indexOf(widget);
    this.widgetService.removeWidget(widgetIndex);
  }
}