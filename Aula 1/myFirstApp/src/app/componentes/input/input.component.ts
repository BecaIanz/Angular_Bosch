import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  text: string = ""

  @Output()
  OnChange: EventEmitter<string> = new EventEmitter<string>()


  changeText(value: Event) {
    this.text = (value.target as HTMLInputElement).value
    console.log(this.text);
    this.OnChange.emit(this.text)
  }
}
