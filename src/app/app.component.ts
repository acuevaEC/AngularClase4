import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clase4AC';
  estaCargando =false;

  personas: string[] = [
    'MARIA',
    'JOSE',
    'JUAN',
    'PEDRO'
  ]
  mensajeNumero = 21;

  getFontSize(arg:number) : string {

    switch (arg){
      case 1:
        return '30px';
      case 2:
        return '50px';
      case 3: 
        return '100px';

      default:
        return '2px';
    };
  }
}

