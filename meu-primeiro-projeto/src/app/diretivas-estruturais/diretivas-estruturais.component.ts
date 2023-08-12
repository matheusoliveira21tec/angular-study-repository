import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit{
public condition:boolean = true;
public list:Array<{name:string, age:number}> = [{name:'Matheus', age:22},{name:'Lucas', age:25}];
public conditionClick:boolean = true;
public name:string = 'Matheus';
constructor() { }
ngOnInit(): void {
  setInterval(() => {
    if(this.condition){
      this.condition = false;
    }else{
      this.condition = true;}
  },2000);
  };
  public onClick(){
    if(this.conditionClick){
      this.conditionClick = false;
    }else{
      this.conditionClick = true;}
  };
  public addOnList(){
    this.list.push({name:'Matheus', age:22});
    
  };
  public onClickEventList(event : number){
    this.list.splice(event,1);
  };
  
}
