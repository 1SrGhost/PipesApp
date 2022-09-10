import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'})
export class MayusculasPipe implements PipeTransform {

    transform(variable: string, enMayusculas:boolean): string {  
        
        if(enMayusculas) {
            return variable.toUpperCase();
        } 
        else {
            return variable.toLocaleLowerCase();
        }
        
    }
}