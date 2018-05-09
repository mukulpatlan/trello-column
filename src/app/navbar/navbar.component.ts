import { Component, OnInit, ViewChild } from '@angular/core';
import { Widget } from '../models/widget.model';
import { NgForm } from '@angular/forms';
import { Container } from '../models/container.model';
import { WidgetService } from '../services/widget.service';
import { ContainerService } from '../services/container.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  allWidgets: Widget[];
  @ViewChild('f') form: NgForm;
  containers: Array<Container>;
  selectedColumnName = 'TO_DO';

  constructor(
    public widgetService: WidgetService,
    public containerService: ContainerService
  ) { }

  ngOnInit() {
    this.containers = this.containerService.getContainers();
    this.allWidgets = this.widgetService.getWidgets();
    this.widgetService.widgetsChanged.subscribe(
      (widgets: Widget[]) => {
        this.allWidgets = widgets;
      }
    )
    console.log(this.allWidgets);
  }

  addTo(cardName: any, columnName: any) {
    let widgetName = cardName.value;
    let containerName = columnName.value;
    let newList = [];

    const result = this.allWidgets.findIndex((ele) => ele.name === widgetName);
    if (result === -1 && widgetName) {
      switch (this.selectedColumnName) {
        case 'TO_DO':
          this.widgetService.addWidget(new Widget(this.allWidgets.length + 1, widgetName, 1));
          break;
        case 'IN_PROGRESS':
          this.widgetService.addWidget(new Widget(this.allWidgets.length + 1, widgetName, 2));
          break;
        case 'DONE':
          this.widgetService.addWidget(new Widget(this.allWidgets.length + 1, widgetName, 3));
          break;
        default: this.widgetService.addWidget(new Widget(this.allWidgets.length + 1, widgetName, 1));
      }
      this.form.controls['cardName'].reset();
    } else {
      alert('Already In list')
    }
  }

}