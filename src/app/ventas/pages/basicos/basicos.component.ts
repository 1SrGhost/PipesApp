import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

 nombreUpper:string = "andres perez";
 nombreLower:string = "andres perez";
 nombreTitle:string = "andres perez";

 fecha: Date = new Date(); // el dia de hoy 

}
