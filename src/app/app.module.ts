import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {DndModule} from 'ng2-dnd';
import { EmbeddedSortableComponent } from './embedded-sortable/embedded-sortable.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { GroupPipe } from './pipes/group.pipe';
import { WidgetService } from './services/widget.service';
import { ContainerService } from './services/container.service';

@NgModule({
  declarations: [
    AppComponent,
    EmbeddedSortableComponent,
    GroupPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DndModule.forRoot()
  ],
  providers: [WidgetService, ContainerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
