import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainPageComponent } from './features/main-page/main-page.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ButtonComponent } from './shared/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    MainPageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ModalComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
