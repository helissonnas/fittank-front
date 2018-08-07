import { Component, OnInit } from '@angular/core';
import {AcademiaService} from '../../services/academia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private acad: AcademiaService) { }

  ngOnInit() {
    console.log(this.acad.academia);
  }

}
