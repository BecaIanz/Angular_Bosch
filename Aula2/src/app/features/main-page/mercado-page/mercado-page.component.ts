import { Component } from '@angular/core';
import MockMercadorias, { IMercadoria } from './Mercado.mock';
import MockComidas from '../comida-page/Comida.mock';

@Component({
  selector: 'app-mercado-page',
  templateUrl: './mercado-page.component.html',
  styleUrls: ['./mercado-page.component.css']
})
export class MercadoPageComponent {
  protected mercadorias: IMercadoria[] =[]

  constructor (){
    this.mercadorias = MockMercadorias
  }
}
