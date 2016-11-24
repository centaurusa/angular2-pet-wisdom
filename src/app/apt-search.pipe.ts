import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})

export class AptSearchPipe implements PipeTransform {

      transform(data: any, search: any): any {
          if (search === undefined) {
            return data;
          }
          return data.filter((data) => {
            return data.petOwner.toLowerCase().includes(search.toLowerCase())
          })
      }
}
