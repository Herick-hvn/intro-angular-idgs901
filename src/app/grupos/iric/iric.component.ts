import { Component } from '@angular/core';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  alumnosIric:any[]=[
    {
      
        matricula:20002144,
        nombre:'Juan',
        edad:21,
        correo:"Juan@gmail.com",
        foto:'https://www.google.com/search?rlz=1C1CHWL_esMX1030MX1030&sxsrf=APwXEddnTm8FyU6BkLjKbrM50q2pO2GzOw:1686792853740&q=personas+fotos&tbm=isch&sa=X&ved=2ahUKEwj__eyGkcT_AhUjIkQIHZ_XBmMQ0pQJegQICRAB&biw=1366&bih=649&dpr=1#imgrc=Il8yxmJjfsINOM'
      
    },
    {
      
      matricula:20002144,
      nombre:'Luisa',
      edad:23,
      correo:"Luisa@gmail.com",
      foto:'https://www.google.com/search?q=personas+fotos&tbm=isch&chips=q:personas+fotos,g_1:cara:ACTg4neeYqY%3D&rlz=1C1CHWL_esMX1030MX1030&hl=es-419&sa=X&ved=2ahUKEwiDtpiWkcT_AhXeKd4AHRVgCKUQ4lYoAHoECAEQKA&biw=664&bih=622#imgrc=Qx_-Snt2V6mQiM'
    }
    ,
    {
      
      matricula:20002144,
      nombre:'Mbappe',
      edad:24,
      correo:"Mbappe@gmail.com",
      foto:'https://www.google.com/search?q=mbappe&tbm=isch&ved=2ahUKEwiDtpiWkcT_AhXeKd4AHRVgCKUQ2-cCegQIABAA&oq=mbappe&gs_lcp=CgNpbWcQAzINCAAQigUQsQMQgwEQQzIHCAAQigUQQzINCAAQigUQsQMQgwEQQzINCAAQigUQsQMQgwEQQzINCAAQigUQsQMQgwEQQzINCAAQigUQsQMQgwEQQzIHCAAQigUQQzIHCAAQigUQQzINCAAQigUQsQMQgwEQQzIECAAQAzoHCCMQ6gIQJzoECCMQJzoICAAQgAQQsQM6BQgAEIAEOggIABCxAxCDAVDYBFjYC2C8DGgBcAB4AYAB4weIAbAQkgEHNC0xLjEuMZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=tWqKZMOHN97T-LYPlcChqAo&bih=649&biw=1366&rlz=1C1CHWL_esMX1030MX1030#imgrc=QZioRYgy9MiUJM'
    }
  ]


}
