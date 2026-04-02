import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from "../../shared/modal/modal.component";


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage implements OnInit {

  isSubscribe = false

  constructor(
    private _router: Router, 
    private _activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((param) => {
      this.isSubscribe = param['tab'] == 'subscribe'
    })
  }
  title: string ="Login"

  _login = () => {

    this._router.navigate(['/']);
    console.log("teoricamente foi")

  }

}
