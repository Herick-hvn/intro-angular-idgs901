import { Component } from '@angular/core';

@Component({
  selector: 'app-ievn',
  template: `
  <h1>IEVN</h1>
<div>
  <b>Matricula: {{alumnos.matricula}}</b>
</div>
<div>
  <b>Nombre: {{alumnos.nombre|uppercase}}</b>
</div>
<div>
  <b>Edad: {{alumnos.edad}}</b>
</div>
<div>
  <b>Fecha de nacimiento: {{alumnos.fechaNacimiento|date}}</b>
</div>
<div>
  <b>Pago: {{alumnos.pago}}</b>
</div>
<hr>
<br>
  `
  
})
export class IEVNComponent {

  constructor(){}

  alumnos={
    matricula:20002144,
    nombre:'Luis',
    edad:21,
    fechaNacimiento: new Date(),
    pago:9200.35
  }

}
