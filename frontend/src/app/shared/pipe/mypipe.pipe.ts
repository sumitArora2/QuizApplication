import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
  pure:false
})
export class MypipePipe implements PipeTransform {

  transform(value: any, arg: string): any {
    if(!arg){
      return value;
    }else{
      arg=arg.toLowerCase();
    }
   return  value.filter(items=>{
    return  items.username.includes(arg)==true
    });
  }

}
