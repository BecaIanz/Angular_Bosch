import { Component } from '@angular/core';
import { ModalComponent } from "../../shared/modal/modal.component";
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { PixelDto } from '../../domain/PixerInterface';
import { PixelApi } from '../../domain/pixel.api';

@Component({
  selector: 'app-main-page',
  imports: [ModalComponent, ɵInternalFormsSharedModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

  pixels?: PixelDto[] 
  isChange: boolean = false
  title: string = "Digite a cor: "
  color: string = ""
  pixelChange!: PixelDto

  constructor (private api: PixelApi){
    // this.pixels = 
  }

  getPixel = () => {
    this.api.getPixels().subscribe(
      res => {
        console.log(res)
        sessionStorage.setItem("pixels", JSON.stringify(res))
        this.pixels = JSON.parse(sessionStorage.getItem("pixels") || "[]")
      }
    )
  }
  
  ngOnInit(): void {
    this.getPixel()
  }

  onChangeColor = (pixel: PixelDto) => {
    this.pixelChange = pixel
    this.isChange = true
  }

  closeModal = () =>{
    this.pixelChange.color = this.color
    this.isChange = false
  }
}

