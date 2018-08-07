import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {apiREST} from '../../constants/apiREST';

@Injectable({
  providedIn: 'root'
})
export class PersonalService extends RestService {

  constructor() {
    super(apiREST.personal);
  }
}
