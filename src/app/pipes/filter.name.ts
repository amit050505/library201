import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class BookFilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any[] {
    
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    //return items.filter((item: any) => item.movie_title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    
    return items.filter( it => {
        return it.title.toLowerCase().includes(filter.name.toLowerCase()) && 
               it.author.toLowerCase().includes(filter.author.toLowerCase()) &&
               (filter.categories.indexOf(it.category)!== -1);
      });
  }
  
}