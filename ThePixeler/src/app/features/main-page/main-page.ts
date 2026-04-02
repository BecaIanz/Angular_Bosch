import { Component } from '@angular/core';
import { NgForOf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { MockPixel, IPixel } from './Pixel.mock';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

  pixels?: IPixel[]

  constructor (){
    this.pixels = MockPixel
  }
}

