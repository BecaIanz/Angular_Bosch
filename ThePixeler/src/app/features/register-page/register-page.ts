import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage implements OnInit {

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