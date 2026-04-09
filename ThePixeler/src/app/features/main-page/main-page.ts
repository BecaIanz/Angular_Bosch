import { Component } from '@angular/core';
import { NgForOf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import {generateSequentialPixels, IPixel } from './Pixel.mock';
import { ModalComponent } from "../../shared/modal/modal.component";
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  imports: [ModalComponent, ɵInternalFormsSharedModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

  pixels?: IPixel[] 
  isChange: boolean = false
  title: string = "Digite a cor: "
  color: string = ""
  pixelChange!: IPixel

  constructor (){
    this.pixels = generateSequentialPixels()
  }

  onChangeColor = (pixel: IPixel) => {
    this.pixelChange = pixel
    this.isChange = true
  }

  closeModal = () =>{
    this.pixelChange.color = this.color
    this.isChange = false
  }
}

