import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {apiREST} from '../../constants/apiREST';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AcademiaService extends RestService {

  _academia;

  constructor() {
    super(apiREST.academia);
  }

  private storeAcademia() {
    const email = sessionStorage.getItem('email');

    if (email) {
      axios.get(`${apiREST.baseAPIUrl}/${apiREST.academia}/email/${email}`).then((response) => {
        if (response.data) {
          sessionStorage.setItem('academia', JSON.stringify(response.data));
          this._academia = response.data;
        }
      });
    }
  }

  get academia() {
    if (this._academia) {
      return this._academia;
    } else {
      this.storeAcademia();
      return this._academia;
    }
  }


}
