import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from "../../shared/modal/modal.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { LoginDto } from '../../domain/UserInterfaces';
import { AuthApi } from '../../domain/auth.api';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ModalComponent, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage implements OnInit {

  isSubscribe = false
  LoggedIn = false

  constructor(
    private api: AuthApi,
    private _router: Router, 
    private _activatedRoute: ActivatedRoute
  ){}

  LoginForm : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  get UserName(){
    return this.LoginForm.get("username")
  }
  get Password(){
    return this.LoginForm.get("password")
  }

  login = () => {
    if(!this.LoginForm.valid){
      alert("Campos Inválidos")
      return
    }

    const data: LoginDto = {
      password: this.Password?.value,
      username: this.UserName?.value
    }

    this.api.login(data).subscribe(
      res =>{
        console.log(res)
        sessionStorage.setItem("token", res)
        sessionStorage.setItem("LoggedIn", "true");
        this._router.navigate(['/main']);
      } 
    )

  }

  subscribe = () => {
    if(!this.LoginForm.valid){
      alert("nem todos os campos são válidos")
      return
    }
    
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((param) => {
      this.isSubscribe = param['tab'] == 'subscribe'
    })
  }
  title: string ="Login"
}
