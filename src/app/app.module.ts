import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthService} from './services/auth.service';
import {AcademiaService} from './services/academia.service';
import {ClienteService} from './services/cliente.service';
import {GerenteService} from './services/gerente.service';
import {PersonalService} from './services/personal.service';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './private/home/home.component';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './guards/auth.guard';
import { NavbarComponent } from './private/navbar/navbar.component';
import { LeftbarComponent } from './private/leftbar/leftbar.component';
import { ClientesComponent } from './private/clientes/clientes.component';
import { ClienteFormComponent } from './private/clientes/cliente-form/cliente-form.component';
import {BsDropdownModule, ModalModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    LeftbarComponent,
    ClientesComponent,
    ClienteFormComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    AcademiaService,
    ClienteService,
    GerenteService,
    PersonalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
