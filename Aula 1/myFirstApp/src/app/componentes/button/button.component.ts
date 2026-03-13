import { Component, EventEmitter , Output, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  isClicked = false

  @Output("OnClick")
  OnClick: EventEmitter<void> = new EventEmitter()

  
  @Input()
  Label: string = ""

  clicked = () => {
    this.OnClick.emit()
  }
}
