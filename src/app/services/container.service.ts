import { Injectable } from '@angular/core';
import { Container } from '../models/container.model';

@Injectable()
export class ContainerService {
  private containers: Array<Container> = [
    new Container(1, 'TO_DO', []),
    new Container(2, 'IN_PROGRESS', []),
    new Container(3, 'DONE', [])
  ];

  getContainers(){
    return this.containers.slice();
  }
}
