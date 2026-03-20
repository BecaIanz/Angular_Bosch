import { Component, EventEmitter, Input, Output } from '@angular/core';
import MockComidas, { IComida } from './Comida.mock'

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent {
  protected comidas: IComida[] = []
    comida?: IComida
    protected isOpen  = false;
    title: string = "Titulo"
    button1: string = "So vai"
  
    changeModal = (id : number) => {
      this.isOpen = true;
      this.comida = this.comidas.find(c => c.id == id)
    }
    closed = () => {
      this.isOpen = false
    }


  constructor (){
    this.comidas = MockComidas
  }
}
