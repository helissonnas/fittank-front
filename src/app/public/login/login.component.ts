import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  carregando = false;
  credenciais = { email: '', senha: '' };
  logo = 'assets/logo.png';

  constructor(private auth: AuthService) { }

  ngOnInit() {}

  onSubmit() {
    this.carregando = true;

    this.auth.login(this.credenciais);
  }


}
