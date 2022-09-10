import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
    })
    
export class vuelaPipe implements PipeTransform {
    vuelas: string = '';

    transform(variable:boolean): string {  
        
        if(variable == true) {
            return this.vuelas = 'si';
        } 
        else {
            return this.vuelas = 'no';
        }
        
    }
}