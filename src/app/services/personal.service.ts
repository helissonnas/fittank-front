import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {apiREST} from '../../constants/apiREST';

@Injectable({
  providedIn: 'root'
})
export class PersonalService extends RestService {

  lista = [];

  constructor() {
    super(apiREST.personal);
  }

  ajustaUsuario(personal) {
    personal.usuario.perfis = [3];
    return personal;
  }
}
