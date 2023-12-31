import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit{
public condition:boolean = false;
public height:string = '100px';
public bgColor: string = 'red';
public name:string = '';
public list:Array<{name:string}> = [];
public date:Date = new Date();
constructor() { }
ngOnInit(): void {
  setInterval(() => {
    if(this.condition){
      this.condition = false;
    }else{
      this.condition = true;}

    if(this.height == '100px'){
      this.bgColor = 'blue';
      this.height = '200px';
    }else{
      this.height = '100px';
      this.bgColor = 'red';
    }
  },2000);
}
public salvar(){
  this.list.push({name:this.name});
  this.name = '';
}
}
