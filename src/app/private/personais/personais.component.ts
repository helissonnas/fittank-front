import { Component, OnInit } from '@angular/core';
import {PersonalService} from '../../services/personal.service';

@Component({
  selector: 'app-personais',
  templateUrl: './personais.component.html',
  styleUrls: ['./personais.component.css']
})
export class PersonaisComponent implements OnInit {


  constructor(private perS: PersonalService) { }

  ngOnInit() {
    this.perS.getAll().then((response) => {
      this.perS.lista = response.data;
    });
  }

  visualizar(id) {
    window.location.replace('/personal/' + id);
  }

  delete(perSente) {
    this.perS.delete( this.perS.ajustaUsuario(perSente) ).then((response) => {
      window.location.replace('/personais');
    }).catch(error => {
      console.log(error.response);
    });
  }

}
