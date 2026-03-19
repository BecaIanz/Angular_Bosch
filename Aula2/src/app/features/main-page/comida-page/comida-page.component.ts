import { Component, EventEmitter, Input, Output } from '@angular/core';
import MockComidas, { IComida } from './Comida.mock'

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent {
  protected comidas: IComida[] = []


  constructor (){
    this.comidas = MockComidas
  }
}
