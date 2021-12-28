import { Pipe, PipeTransform } from '@angular/core';
import { ToggleCondition } from './toggle-condition.enum';

@Pipe({
  name: 'changeDegree'
})
export class ChangeDegreePipe implements PipeTransform {

  transform(temp: number, toggle: ToggleCondition): string {
    if (toggle === ToggleCondition.celsius) {
      const newLocal = `${Math.floor(temp - 273.15)} \u00B0C`;
      return newLocal
    }
    else {
      const newLocal = `${Math.floor(temp)} \u00B0K`;
      return newLocal
    }
  }

}