import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input()
  Title: string = ""
  @Input()
  Confirmation: boolean = false
  @Input()
  Button1: string = ""
  @Input()
  Button2: string = ""

  @Output()
  Closed: EventEmitter<boolean> = new EventEmitter()

  closeModal = () =>{
    this.Closed.emit()
  }
}
