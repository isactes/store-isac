import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(firstsName: string, ...lastName: string[]): string {
    return firstsName + " " + lastName.join(" ");
  }

}
