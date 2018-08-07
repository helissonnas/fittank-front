import {Component, HostListener, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logo = 'assets/logo.png';
  email;
  esconde = false;
  private innerWidth: number;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.email = window.sessionStorage.getItem('email');

    if  (window.screen.width < 600) {
      this.esconde = true;
    }
  }

  singout() {
    this.auth.logout();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;

    if  (this.innerWidth < 600) {
      this.esconde = true;
    }
  }

}
