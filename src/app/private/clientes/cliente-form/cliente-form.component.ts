import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ClienteService} from '../../../services/cliente.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente = {
    'id': null,
    'peso': '',
    'altura': '',
    'massaMagra': '',
    'usuario': {
      'id': '',
      'login': '',
      'senha': '',
      'email': '',
      'perfis': [
        2
      ],
      'endereco': {
        'numero': '',
        'rua': '',
        'bairro': '',
        'cidade': '',
        'complemento': ''
      },
      'academia': {}
    },
    'planoTreino': null,
    'objetivos': []
  };
  modalRef: BsModalRef;
  carregando = false;
  tag;

  constructor(private modalService: BsModalService,
              private cliS: ClienteService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.carregando = true;
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
       if (id !== 'criar') {
         this.cliS.getById(id).then((response) => {

           if (response.data) {
             this.cliente = response.data;
           }

           this.carregando = false;
         });
       } else {
         this.carregando = false;
       }
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  adicionarTag() {
    if (!this.cliente.objetivos) {
      this.cliente.objetivos = [];
    }

    this.cliente.objetivos.push(this.tag);
    this.tag = '';

    this.decline();
  }

  confirm(): void {
    this.modalRef.hide();
    this.delete();
  }

  decline(): void {
    this.modalRef.hide();
  }

  salvar() {
    this.carregando = true;
    this.cliS.post( this.cliS.ajustaUsuario(this.cliente) ).then((response) => {
        window.location.replace('/clientes');
    }).catch(error => {
      this.carregando = false;
      console.log(error.response);
    });
  }

  delete() {
    this.carregando = true;
    this.cliS.delete( this.cliS.ajustaUsuario(this.cliente) ).then((response) => {
      window.location.replace('/clientes');
    }).catch(error => {
      this.carregando = false;
      console.log(error.response);
    });
  }
}
