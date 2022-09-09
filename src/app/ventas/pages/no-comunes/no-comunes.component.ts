import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18Select
  hombre = {nombre: "andres perez",
  genero: 'masculino'}

  mujer = {nombre: "Luisa Diaz",
  genero: 'femenino'}

  nombre = this.hombre.nombre;
  genero = this.hombre.genero;

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }
   //i18plural
   clientes: string[] = ['Maria','Claudia','Laura','Maria','Claudia','Laura']
   clientesMap = {
     '=0' : 'no tenemos ningun cliente esperando',
     '=1' : 'tenemos un cliente esperando',
     'other' : 'tenemos # clientes esperando', // cualquier otro valor # hace referencia al numero 
   }

  cambiarCliente(){
    console.log('cambiarCliente funcionando');
    if(this.nombre == this.hombre.nombre){
      this.nombre = this.mujer.nombre;
      this.genero = this.mujer.genero;
  }
    else {
      this.nombre = this.hombre.nombre;
      this.genero = this.hombre.genero;
    }

  }

  borrarCliente(){
    console.log('borrarCliente funcionando');
    this.clientes.splice(0,1);
  }

  retablecer(){
    this.clientes = ['Maria','Claudia','Laura','Maria','Claudia','Laura']
    console.log('retablecer funcionando');

  }
 //key value pipe

 persona = {
  nombre: 'edgar andres',
  edad: 35,
  direccion: 'Villavieja,Huila'

 }

}
