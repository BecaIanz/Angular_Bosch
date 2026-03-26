import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-validate-cpf',
  templateUrl: './validate-cpf.component.html',
  styleUrls: ['./validate-cpf.component.css'],
})
export class ValidateCpfComponent {

  @Output()
  isValid :EventEmitter<boolean> = new EventEmitter<boolean>()
  
  @Output()
  cpfValid :EventEmitter<string> = new EventEmitter<string>()
  
  cpf: string = ""
  foi: boolean = false
  soma1 : number = 0
  modulo1 : number = 0
  soma2 : number = 0
  modulo2 : number = 0

  cpfNumber: number[] = []

  digito1 : number = 0
  isDigito1: boolean = false
  digito2 : number = 0
  isDigito2: boolean = false
  
  acharDigitos = (value : Event) => {

    // * atibuição de valores
    this.cpf = (value.target as HTMLInputElement).value
    this.cpfNumber = this.cpf.replace(/\./g, '').replace(/\-/g, '').split('').map(Number);
    this.digito1 = this.cpfNumber[9]
    this.digito2 = this.cpfNumber[10]
    
    // * verificar o primeiro digito
    for (let i = 0; i < 8; i++) 
      this.soma1 = this.soma1 + this.cpfNumber[i]*(i+1)
    
    this.modulo1 = this.soma1 % 11
    
    if(this.modulo1 == this.digito1){}
    this.isDigito1 = true
    
    // * verificar o segundo digito
    for (let i = 0; i < 10; i++) 
      this.soma2  = this.soma2 + this.cpfNumber[i]*i
    
    this.modulo2 = this.soma2 % 11
    
    if(this.modulo2 == this.digito2)
      this.isDigito2 = true
    
    // * Validação final
    if(this.isDigito1 && this.isDigito2){
      this.cpfValid.emit(this.cpf)
      this.isValid.emit(true)
      this.foi = true
      console.log(this.foi)
    }
    else
      this.isValid.emit(false)
  
  }

}
