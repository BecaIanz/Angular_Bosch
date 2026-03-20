import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComida } from '../Comida.mock';

@Component({
  selector: 'app-modal-comida',
  templateUrl: './modal-comida.component.html',
  styleUrls: ['./modal-comida.component.css']
})
export class ModalComidaComponent {

  @Input()
  comida?: IComida

  @Output()
  Closed: EventEmitter<boolean> = new EventEmitter()

  closeModal = () =>{
    this.Closed.emit()
  }
}