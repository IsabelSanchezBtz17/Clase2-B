import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public flag: boolean = true;
  public value: string= '';
  public escala: string= '';
 
   title = 'segunda-clase-b';

  constructor(){

  }

  ngOnInit(): void {
    this.ocultar();
  }

  public ocultar(){

    let boton = document.getElementById('btn');
    boton?.addEventListener("click", ()=>{
      //this.flag=!this.flag;
      let grado: HTMLInputElement= document.getElementById('grados') as HTMLInputElement ;
      let escalaInput: HTMLInputElement= document.getElementById('escala') as HTMLInputElement ;
      this.value=grado.value;
      this.escala= escalaInput.value;

    })
  }

  
}
