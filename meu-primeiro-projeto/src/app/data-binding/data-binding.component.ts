import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  public position : {x:number, y:number} = {x:0, y:0};
  public name: string = 'Matheus';
  public age: number = 25;
  public buttonDisabled: boolean = true;
  public imgSrc: string = "https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  public imgAlt:string = "gatinho fofo";
  public alertaInfo(valor:MouseEvent){
    console.log(valor);
  }
  mouseMoveTest(valor:MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}

