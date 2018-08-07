import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {apiREST} from '../../constants/apiREST';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends RestService {

  lista = [];

  constructor() {
    super(apiREST.cliente);
  }

  ajustaUsuario(cli) {
    cli.usuario.perfis = [2];
    return cli;
  }
}
