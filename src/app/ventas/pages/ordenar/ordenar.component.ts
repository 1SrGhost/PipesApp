import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  variable: boolean = true;
  cambiar() {
    console.log("funcionando");
    if (this.variable){
      this.variable = false;
      console.log(this.variable);
    }
    else {
      this.variable = true;
      console.log(this.variable);
    }
  }

}

