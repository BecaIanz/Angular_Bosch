import { Component, Input, Output } from '@angular/core';
import { IComida } from '../Comida.mock';

@Component({
  selector: 'app-card-comida',
  templateUrl: './card-comida.component.html',
  styleUrls: ['./card-comida.component.css']
})
export class CardComidaComponent {

  @Input()
  comida! : IComida
  
}
