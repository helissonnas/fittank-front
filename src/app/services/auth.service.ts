import { Injectable } from '@angular/core';
import axios from 'axios';

import {RestService} from './rest.service';
import {apiREST} from '../../constants/apiREST';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {  }

  login(credenciais) {
    axios.post(`${apiREST.baseAPIUrl}/${apiREST.login}`, credenciais ).then((response) => {
      this._store(response.headers.authorization, credenciais.email);
    }).catch(error => {
      if (error.response.status === 401) {
        alert('Senha ou email inválido');
        window.location.replace('');
      }
    });
  }

  isAuthenticated() {
    const d = new Date();
    const h = d.getHours();

    if (window.sessionStorage.getItem('tk' + h)) {
      return true;
    } else {
      sessionStorage.clear();
      location.reload();
    }
  }

  private _store(tk, email) {
    const d = new Date();
    const h = d.getHours();

    window.sessionStorage.setItem('email', email);
    window.sessionStorage.setItem('tk' + h, tk);

    window.location.replace('');
  }

  logout() {
    sessionStorage.clear();
    location.reload();
  }
}
