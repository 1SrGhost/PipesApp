import { Pipe, PipeTransform } from '@angular/core';
import { iHeroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: iHeroe[], order:string = 'sin valor'): iHeroe[] {
   
    switch (order) {
      case 'nombre':

        return  value = value.sort((a,b)=>(a.nombre > b.nombre) ? 1 : -1);
      case 'vuela':
        
        return  value = value.sort((a,b)=>(a.vuela > b.vuela) ? -1 : 1);
      case 'color':
        
         return value = value.sort((a,b)=>(a.color > b.color) ? 1 : -1);
        
      //si no coincide con ninguna opcion retornar el valor inicial
      default:
        return value;
    }
}
}