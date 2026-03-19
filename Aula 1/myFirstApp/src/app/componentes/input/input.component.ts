import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input()
  Text: string = "";

  @Output()
  OnChange: EventEmitter<string> = new EventEmitter<string>()


  changeText = (value: Event) => {
    this.Text = (value.target as HTMLInputElement).value
    console.log(this.Text);
    this.OnChange.emit(this.Text)
  }
}
