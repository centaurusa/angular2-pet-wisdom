import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class AptSearchPipe implements PipeTransform {

      transform(apts: any, search: any): any {
          if (search === undefined) {
            return apts;
          }
          return apts.filter((apts) => {
            return apts.petOwner.toLowerCase().includes(search.toLowerCase())
          })
      }
}
