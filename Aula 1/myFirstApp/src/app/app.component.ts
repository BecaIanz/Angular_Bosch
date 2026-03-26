import { Component } from '@angular/core';
// fiz coisas ai
// 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstApp';
  count = 0;
  textinho = ""
  nome = "Rebeca"

  foiClicado = () => {
    this.count++
  }
  mudou = (text: string) => {
    this.textinho = text
  }
}

