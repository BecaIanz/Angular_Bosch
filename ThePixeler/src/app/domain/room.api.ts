import { Injectable } from '@angular/core';
import { Api } from './api';
import { PixelDto } from './PixelInterface';
import { CanvasAction, MessageType, WebSocketMessage } from './interfaces/room';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomApi extends Api{
  private wsUrl = "ws://10.234.197.18:5294/api/room"
  
  private pixelSubject = new Subject<CanvasAction>()

  private socket! : WebSocket

  public connect = (roomId: string) => {
    const token = sessionStorage.getItem('token')
    if(!token)
      return

    this.socket = new WebSocket(`${this.wsUrl}/${roomId}?token=${encodeURIComponent(token)}`)

    this.socket.onopen = (event) => {
      console.log("conexão abrida")
    }
    this.socket.onmessage = (event: MessageEvent) => {
      const message: WebSocketMessage<any> = JSON.parse(event.data)


      switch (message.Type) {
        case MessageType.Message:
          console.log(message.Data)
          break
        case MessageType.FirstConnection:
          this.pixelSubject.next({type: 'FULL_LOAD', payload: message.Data})
          break
        case MessageType.PlayerAction:
          this.pixelSubject.next({type: 'SINGLE_LOAD', payload: message.Data})
          break
        default:
          break
      }
    }
    this.socket.onerror = (err) => {
      console.log("deu erro: ", err)
    }
    this.socket.onclose = () => {
      console.log("conexão encerrada")
    }
  }

  public closeConnection = () => {
    if(this.socket)
      this.socket.close()

  }

  public updatePixel = (data:PixelDto) => {
    if(this.socket.readyState === WebSocket.OPEN){
      this.socket.send(JSON.stringify(data))
    }
  }
}
