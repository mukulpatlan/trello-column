import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    let TO_DO = {
        name: 'TO_DO',
        widgets: []
      };
    let IN_PRPGRESS ={
        name: 'IN_PROGRESS',
        widgets: []
      };
    let DONE = {
        name: 'DONE',
        widgets: []
      };

    let group = [];

    let val = value.forEach(element => {
      if(element['groupName'] === 1){
        TO_DO.widgets.push(element);
      } else if(element['groupName'] === 2){
        IN_PRPGRESS.widgets.push(element);
      } else{
        DONE.widgets.push(element);
      }
    });
    group.push(TO_DO, IN_PRPGRESS, DONE);
    return group;
  }

}
