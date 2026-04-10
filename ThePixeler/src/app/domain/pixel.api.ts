import { Injectable } from '@angular/core';
import { Api } from './api';
import { Observable } from 'rxjs';
import { PixelDto } from './PixelInterface';

@Injectable({
  providedIn: 'root',
})
export class PixelApi extends Api{
  getPixels = () : Observable<PixelDto[]> =>{
    return this.client.get<PixelDto[]>(`${this.URL}/pixel`).pipe()
  }
  changePixel = (data: PixelDto) : Observable<void> =>{
    return this.client.post<void>(`${this.URL}/pixel`, data).pipe()
  }
}