import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wizardHouse',
  standalone: true
})
export class WizardHousePipe implements PipeTransform {
  transform(house: string | null | undefined): string {
    if (!house) {
      return 'HOMELESS';
    }
    return house.toUpperCase();
  }
}
