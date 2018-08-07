import { Component, OnInit } from '@angular/core';
import {AcademiaService} from '../../services/academia.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  modalRef: BsModalRef;
  carregando = false;
  gif = 'assets/carregando.gif';
  academia = {
    id: null,
    nome: '',
    endereco: {
      numero: '',
      rua: '',
      bairro: '',
      cidade: '',
      complemento: null
    },
    aparelhos: []
  };

  constructor(private modalService: BsModalService,
              private acadS: AcademiaService) {
    this.acadS.academia;
  }

  ngOnInit() {
    this.academia = this.acadS.academia;
  }

  salvar() {
    this.carregando = true;
    this.acadS.post(this.academia).then((response) => {
      this.acadS.storeAcademia();
      this.carregando = false;
      window.location.reload();
    }).catch(error => console.log(error.response) );
  }

  cancelar() {
    this.academia = this.acadS.academia;
  }
}
