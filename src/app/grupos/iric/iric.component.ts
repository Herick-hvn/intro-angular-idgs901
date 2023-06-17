import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth:number=100
  imageMargin:number=2
  muestraImg:boolean=true
  listFilter?:string
  
  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  alumnosIric:IAlumnosIric[]=[
    {
      
        matricula:20002144,
        nombre:'Juan',
        edad:21,
        correo:"Juan@gmail.com",
        foto:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"      
    },
    {
      
      matricula:20002144,
      nombre:'Luisa',
      edad:23,
      correo:"Luisa@gmail.com",
      foto:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    }
    ,
    {
      
      matricula:20002144,
      nombre:'Mbappe',
      edad:24,
      correo:"Mbappe@gmail.com",
      foto:'https://fotografias.antena3.com/clipping/cmsimages01/2022/09/23/6B51E1BF-9895-40A1-AED9-A9CF5D925BA4/mbappe-partido-austria-nations-league_97.jpg?crop=1920,1080,x0,y101&width=1600&height=900&optimize=low&format=webply'
    }
  ]

  
  


}
