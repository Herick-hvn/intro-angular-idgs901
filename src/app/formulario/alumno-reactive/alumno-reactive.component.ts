import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {

  alumnoForm!:FormGroup

  constructor(private readonly fb: FormBuilder){
    this.alumnoForm = this.initForm()

  }

  onSubmit():void{
    //console.log('Forms ->', this.alumnoForm.value)
    this.obtenerDatos()

  }

  obtenerDatos():void{
    const matricula =this.alumnoForm.get('matricula')?.value
    console.log('Matricula: ', matricula)
    const nom =this.alumnoForm.get('nombre')?.value
    console.log('Nombre: ', nom)
  }

  initForm():FormGroup{
    return this.fb.group({

      matricula: ['',[Validators.required, Validators.minLength(5)]],
      nombre: ['',[Validators.required, Validators.minLength(3)]],
      edad: ['',[Validators.required]],
      correo: ['',[Validators.required]],
      foto: ['',],
      calif: ['',[Validators.required]]

    })
  }

}





