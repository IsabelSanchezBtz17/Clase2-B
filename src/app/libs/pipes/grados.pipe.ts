import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grados'
})
export class GradosPipe implements PipeTransform {

  transform(value: any,...args: any[]): any{
    console.log(value,args);
    let escala = args[0];
    let Fahrenheit = (value * 1.8) + 32;
    let centigrados = (value - 32) * (5/9);
    if (escala === 'c'){
    return  Fahrenheit + 'ºF';
  }
  else return  centigrados + 'ºC';
  }

}
