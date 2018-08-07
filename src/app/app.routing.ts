import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {LoginComponent} from './public/login/login.component';

import {AuthGuard} from './guards/auth.guard';
import {HomeComponent} from './private/home/home.component';
import {ClientesComponent} from './private/clientes/clientes.component';
import {ClienteFormComponent} from './private/clientes/cliente-form/cliente-form.component';


const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', canActivate: [AuthGuard], component: HomeComponent, children: [
      {path: 'clientes', component: ClientesComponent},
      {path: 'cliente/:id', component: ClienteFormComponent}
    ]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
