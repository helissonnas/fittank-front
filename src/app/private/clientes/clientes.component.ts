import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  constructor(private cli: ClienteService) { }

  ngOnInit() {
    this.cli.getAll().then((response) => {
      this.cli.lista = response.data;
    });
  }

  visualizar(id) {
    window.location.replace('/cliente/' + id);
  }

  delete(cliente) {
    this.cli.delete( this.cli.ajustaUsuario(cliente) ).then((response) => {
      window.location.replace('/clientes');
    }).catch(error => {
      console.log(error.response);
    });
  }
}
