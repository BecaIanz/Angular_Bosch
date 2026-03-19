import { Component, Input } from '@angular/core';
import { IMercadoria } from '../Mercado.mock';
@Component({
  selector: 'app-card-mercado',
  templateUrl: './card-mercado.component.html',
  styleUrls: ['./card-mercado.component.css']
})
export class CardMercadoComponent {

  @Input()
  mercadoria! : IMercadoria

}
