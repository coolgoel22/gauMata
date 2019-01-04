import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
     name: 'filter',
     pure: false
})
@Injectable()
export class SearchPipe implements PipeTransform{
     transform(items: any, term:string):any{
          if(!term || !items){
               return items;
          } 
         return SearchPipe.filter(items, term);
     }

     static filter(items:Array<{[key:string]: any}>, term: string): Array<{[key:string]: any }>{
          const toCompare = term.toLowerCase(); 
          
          return items.filter(function (item: any) {
               let value, property;
               for (property in item) {
                    value = item[property];
               
                    if (value === null) {
                         continue;
                    }else{
                         // If object is 2 level deep than searching is supported
                         if(typeof(value) === "object"){
                              for(let childProperty in value){
                                   if(value[childProperty] === null){
                                        continue;
                                   }else{
                                   if (value[childProperty].toString().toLowerCase().includes(toCompare)) {
                                        return true;
                                        }
                                   }
                              }
                         }
                         
                         if (value.toString().toLowerCase().includes(toCompare)) {
                              return true;
                         }
                    }
               }
               return false;
          });
     }
}