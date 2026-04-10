import { Routes } from '@angular/router';
import { LoginPage } from './features/login-page/login-page';
import { RegisterPage } from './features/register-page/register-page';
import { MainPage } from './features/main-page/main-page';
import { authGuardLogin, authGuardMain } from './domain/auth.guard';

export const routes: Routes = [
  {path: '', component: LoginPage},
  {path: 'main', component: MainPage},
  {path: 'register', component: RegisterPage}
];
