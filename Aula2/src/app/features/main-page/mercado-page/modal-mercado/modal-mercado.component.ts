import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMercadoria } from '../Mercado.mock';

@Component({
  selector: 'app-modal-mercado',
  templateUrl: './modal-mercado.component.html',
  styleUrls: ['./modal-mercado.component.css']
})
export class ModalMercadoComponent {

  titleButton : string = "Adicionar ao Carrinho"
  @Input()
  mercadoriaModal?: IMercadoria

  @Output()
  Closed: EventEmitter<boolean> = new EventEmitter()

  closeModal = () =>{
    this.Closed.emit()
  }
}
