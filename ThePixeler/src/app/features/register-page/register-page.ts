import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '../../shared/modal/modal.component';
import { AuthApi } from '../../domain/auth.api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginDto } from '../../domain/UserInterfaces';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ModalComponent, ReactiveFormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage implements OnInit {

  isSubscribe = false

  constructor(
    private api: AuthApi,
    private _router: Router, 
    private _activatedRoute: ActivatedRoute
  ){}

  RegisterForm : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  })

  get UserName(){
    return this.RegisterForm.get("username")
  }
  get Password(){
    return this.RegisterForm.get("password")
  }
  get ConfirmPassword(){
    return this.RegisterForm.get("confirmPassword")
  }

  register = () => {
      if(!this.RegisterForm.valid){
        alert("Campos Inválidos")
        return
      }
      if(this.Password?.value != this.ConfirmPassword?.value){
        alert("As senhas não são iguais")
        return
      }
      
      const data: LoginDto = {
        password: this.Password?.value,
        username: this.UserName?.value
      }
  
      this.api.subscribe(data).subscribe(
        res =>{
          console.log(res)
          this._router.navigate(['/login']);
        })
    }
  
    subscribe = () => {
      if(!this.RegisterForm.valid){
        alert("nem todos os campos são válidos")
        return
      }
      
    }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((param) => {
      this.isSubscribe = param['tab'] == 'subscribe'
    })
  }
  title: string ="Register"


}