import { Component } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = 'intro-angular-idgs901';

 
  alumnos={
    matricula:20002144,
    nombre:'Herick',
    edad:21,
    fechaNacimiento: new Date(),
    pago:9200.35


  }

  calcular(n:number):number{
    return n*2
  }
  
}
