import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultIcon'
})
export class DefaultIconPipe implements PipeTransform {

  defaultIcon = 'icon1.png';
  transform(value: string): string {
    if (! value.trim().length) {
      return this.defaultIcon;
    }
    return value;
  }

}
