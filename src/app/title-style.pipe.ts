import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleStyle'
})
export class TitleStylePipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
    return value = value[0].toUpperCase() + value.slice(1);
    }
    else {
      return ''
    }
  }

}