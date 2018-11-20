import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'authorFilter',
    pure: false
})
export class AuthorFilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any[] {
    
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    //return items.filter((item: any) => item.movie_title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    
    return items.filter( it => {
        return it.author.toLowerCase().includes(filter.author.toLowerCase());
      });
  }
  
}