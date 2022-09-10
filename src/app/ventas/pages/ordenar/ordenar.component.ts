import { Component, OnInit } from '@angular/core';
import { Color, iHeroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  variable: boolean = false;
  varOrdenar: string = ''; 
  heroes: iHeroe[] = [
    {
      nombre: 'SuperMan',
      vuela : true,
      color : Color.azul

    },
    {
      nombre: 'Flash',
      vuela : false,
      color : Color.rojo

    },
    {
      nombre: 'Batman',
      vuela : false,
      color : Color.negro

    },
    {
      nombre: 'Linterna',
      vuela : false,
      color : Color.verde

    }
  ];
  cambiarMayuscula() {
    console.log("Cambiar a mayusculas funcionando");
    if (this.variable){
      this.variable = false;
      console.log(this.variable);
    }
    else {
      this.variable = true;
      console.log(this.variable);
    }
  }

  cambiar(nombre:string){
    console.log(nombre);
    this.varOrdenar = nombre;
     
  }

}

