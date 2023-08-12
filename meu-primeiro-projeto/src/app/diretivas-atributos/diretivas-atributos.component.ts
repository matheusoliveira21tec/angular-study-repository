import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit{
public condition:boolean = false;
constructor() { }
ngOnInit(): void {
  setInterval(() => {
    if(this.condition){
      this.condition = false;
    }else{
      this.condition = true;}
  },2000);
}
}
