import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {LoginComponent} from './public/login/login.component';

import {AuthGuard} from './guards/auth.guard';
import {HomeComponent} from './private/home/home.component';
import {ClientesComponent} from './private/clientes/clientes.component';
import {ClienteFormComponent} from './private/clientes/cliente-form/cliente-form.component';
import {PerfilComponent} from './private/perfil/perfil.component';
import {PersonaisComponent} from './private/personais/personais.component';
import {PersonalFormComponent} from './private/personais/personal-form/personal-form.component';
import {PageNotFoundComponent} from './public/page-not-found/page-not-found.component';


const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', canActivate: [AuthGuard], component: HomeComponent, children: [
      {path: 'clientes', component: ClientesComponent},
      {path: 'cliente/:id', component: ClienteFormComponent},
      {path: 'perfil', component: PerfilComponent},
      {path: 'personais', component: PersonaisComponent},
      {path: 'personal/:id', component: PersonalFormComponent}
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
