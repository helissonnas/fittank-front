import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AcademiaService} from '../../../services/academia.service';
import {PersonalService} from '../../../services/personal.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {
  personal = {
    id: null,
    usuario: {
      id: null,
      login: '',
      senha: '',
      email: '',
      perfis: [
        3
      ],
      endereco: {
        numero: '',
        rua: '',
        bairro: '',
        cidade: '',
        complemento: null
      },
      academia: {}
    },
    planoTreinos: []
  };
  carregando = false;
  gif = 'assets/carregando.gif';

  constructor(private perS: PersonalService,
              private route: ActivatedRoute,
              private acad: AcademiaService) {
    this.personal.usuario.academia = acad.academia;

  }

  ngOnInit() {
    this.carregando = true;
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
      if (id !== 'criar') {
        this.perS.getById(id).then((response) => {

          if (response.data) {
            this.personal = response.data;
          }

          this.carregando = false;
        });
      } else {
        this.carregando = false;
      }
    });
  }

  salvar() {
    this.carregando = true;
    this.perS.post( this.perS.ajustaUsuario(this.personal) ).then((response) => {
      window.location.replace('/personais');
    }).catch(error => {
      this.carregando = false;
      console.log(error.response);
    });
  }

  delete() {
    this.carregando = true;
    this.perS.delete( this.perS.ajustaUsuario(this.personal) ).then((response) => {
      window.location.replace('/personais');
    }).catch(error => {
      this.carregando = false;
      console.log(error.response);
    });
  }

}
