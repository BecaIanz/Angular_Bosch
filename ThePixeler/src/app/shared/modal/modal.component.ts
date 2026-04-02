import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})

export class ModalComponent {

  @Input()
  Title: string = ""
  @Input()
  Confirmation: boolean = true
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

